"use client";

import React from "react";
import { downloadJSON, downloadCSV } from "../utils/download";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import {
  mockAlertsData,
  AlertsData,
  TimePeriodsConfig,
  timePeriodsConfig,
  mockActiveRules,
} from "../mock";
import { TopActiveRules } from "./top-rules";
import { Icons } from "../component/icons";
import { getDateRangeFromTimeFrame } from "../component/time-range";
import { TimeRange } from "../component/time-range";

const timeFrames = ["All", "1D", "7D", "1M", "3M", "1Y", "Custom"] as const;
type TimeFrame = (typeof timeFrames)[number];

// Only register Chart.js components in browser environment
if (typeof window !== "undefined") {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
}

interface AlertsResolutionProps {
  data?: AlertsData;
  timeConfig?: TimePeriodsConfig;
  onDownload?: (data: any) => void;
  onPeriodChange?: (period: string) => void;
}

export const AlertsResolution: React.FC<AlertsResolutionProps> = ({
  data = mockAlertsData,
  timeConfig = timePeriodsConfig,
  onDownload,
  onPeriodChange,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState(
    timeConfig.defaultPeriod
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1Y");
  const [dateError, setDateError] = useState("");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
  const [shouldFetchCustom, setShouldFetchCustom] = useState(false);

  const [rulesData, setRulesData] = useState(mockActiveRules);
  const [tempCustomDateRange, setTempCustomDateRange] = useState({
    from: "",
    to: "",
  });
  const { fromDate, toDate } = getDateRangeFromTimeFrame(
    timeFrame,
    timeFrame === "Custom" && shouldFetchCustom
      ? customDateRange
      : { from: "", to: "" }
  );
  const handleTimeFrameChange = (
    frame: TimeFrame | ((prev: TimeFrame) => TimeFrame)
  ) => {
    const newFrame = typeof frame === "function" ? frame(timeFrame) : frame;
    setTimeFrame(newFrame);
    setDateError("");

    if (newFrame === "Custom") {
      setShouldFetchCustom(false);
      setTempCustomDateRange({ from: "", to: "" });
    } else {
      setShouldFetchCustom(true);
    }
  };

  const chartData = {
    labels: [""],
    datasets: [
      {
        label: "Resolved",
        data: [data.resolved.percentage],
        backgroundColor: "#10B981",
        borderRadius: 5,
        barThickness: 20,
      },
      {
        label: "Unresolved",
        data: [data.unresolved.percentage],
        backgroundColor: "#F59E0B",
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label;
            const value = context.parsed.x;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    scales: {
      x: { display: false, stacked: true },
      y: { display: false, stacked: true },
    },
  };

  const handleRulesDownload = (data: any) => {
    console.log("Rules download:", data);
    downloadCSV(
      data,
      [
        "Rule Code",
        "Transactions Flagged",
        "Transaction Number",
        "Description",
      ],
      "top-active-rules"
    );
  };

  const handleDownload = () => {
    const exportData = {
      alertsAnalysis: {
        period: selectedPeriod,
        resolved: data.resolved,
        unresolved: data.unresolved,
        exportDate: new Date().toISOString(),
      },
    };

    if (onDownload) {
      onDownload(exportData);
    } else {
      downloadJSON(
        exportData,
        `alerts-resolved-vs-unresolved-${selectedPeriod}`
      );
    }
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
    onPeriodChange?.(period);
  };
  const handlePeriodChange = (component: string, period: string) => {
    console.log(`${component} period changed to:`, period);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-text-primary text-[18px] font-medium">Alerts</div>
        <TimeRange setTimeFrame={handleTimeFrameChange} timeFrame={timeFrame} />
        {timeFrame === "Custom" && (
          <div className="flex items-center gap-2 mt-2"></div>
        )}
        {timeFrame === "Custom" && dateError && (
          <div className="text-red-500 text-xs mt-1 ml-2">{dateError}</div>
        )}
      </div>

      <div
        className="flex flex-col md:flex-row gap-4 py-5"
        style={{ height: 370 }}
      >
        <div className="md:w-1/2 h-[70%] box-border text-white p-4 rounded-lg border border-[#2E2E2E] overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="text-xs font-medium">
              Resolved vs Unresolved Alerts
            </div>
            <button
              onClick={handleDownload}
              className="p-1.5 hover:bg-[#2E2E2E] rounded transition-colors cursor-pointer"
              title="Download alerts resolution data"
            >
              <Icons.Download />
            </button>
          </div>

          <div className="mt-7 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">
                {data.resolved.percentage}% Resolved
              </span>
              <span className="text-gray-400">
                {data.unresolved.percentage}% Unresolved
              </span>
            </div>

            <div className="relative h-5">
              {isClient ? (
                <Bar data={chartData} options={options} />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-sm text-gray-400">Loading chart...</div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs space-y-2 mb-7">
              <span className="text-gray-400">
                {data.resolved.transactions} Transactions
              </span>
              <span className="text-gray-400">
                {data.unresolved.transactions} Transactions
              </span>
            </div>

            <div className="flex justify-center space-x-4 py-2">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full border border-green-500 bg-[#121212]" />
                <span className="text-xs text-gray-300">Resolved</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full border border-yellow-500 bg-[#121212]" />
                <span className="text-xs text-gray-300">Unresolved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 h-fit">
          <div className="space-y-3 h-fit">
            <TopActiveRules
              data={rulesData}
              timeConfig={timePeriodsConfig}
              maxItems={5}
              onDownload={handleRulesDownload}
              onPeriodChange={(period) =>
                handlePeriodChange("Active Rules", period)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};