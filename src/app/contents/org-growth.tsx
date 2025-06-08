"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { TimeRange } from "../component/time-range";
import { getDateRangeFromTimeFrame } from "../component/time-range";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  mockGrowthData,
  ChartDataPoint,
  TimePeriodsConfig,
  timePeriodsConfig,
} from "../mock";

// Only register Chart.js components in browser environment
if (typeof window !== "undefined") {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
}

const timeFrames = ["All", "1D", "7D", "1M", "3M", "1Y", "Custom"] as const;
type TimeFrame = (typeof timeFrames)[number];

interface OrganizationGrowthProps {
  data?: ChartDataPoint[];
  timeConfig?: TimePeriodsConfig;
  totalOrganizations?: number;
  onDownload?: (data: any) => void;
  onPeriodChange?: (period: string) => void;
}

export const OrganizationGrowthChart: React.FC<OrganizationGrowthProps> = ({
  data = mockGrowthData,
  timeConfig = timePeriodsConfig,
  totalOrganizations = 604,
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

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    if (onPeriodChange) {
      onPeriodChange(period);
    }
  };

  const [dateError, setDateError] = useState("");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
  const [shouldFetchCustom, setShouldFetchCustom] = useState(false);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1M");
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
    labels: data.map((point) => point.date),
    datasets: [
      {
        label: "Organizations Growth",
        data: data.map((point) => point.value),
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#9CA3AF",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index" as const,
        intersect: false,
      },
    },
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-text-primary text-[18px] font-medium">
          Organization Growth rate
        </div>
        <TimeRange setTimeFrame={handleTimeFrameChange} timeFrame={timeFrame} />
        {timeFrame === "Custom" && (
          <div className="flex items-center gap-2 mt-2"></div>
        )}
        {timeFrame === "Custom" && dateError && (
          <div className="text-red-500 text-sm mt-1 ml-2">{dateError}</div>
        )}
      </div>
      <div className="grid grid-cols-[70%_30%] gap-5 py-6 max-fit max-h-fit">
        <div className="text-white h-[250px]">
          {isClient ? (
            <Line data={chartData} options={chartOptions} />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-sm text-gray-400">Loading chart...</div>
            </div>
          )}
        </div>
        <div className="flex flex-col text-white">
          <div className="text-xs text-gray-400 mb-1">
            Total number of organizations
          </div>
          <div className="text-2xl font-semibold">{totalOrganizations}</div>
        </div>
      </div>
    </>
  );
};
