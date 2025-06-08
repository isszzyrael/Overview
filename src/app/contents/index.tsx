"use client";

import React from "react";
import { useState } from "react";
import { AlertsResolution } from "./alert-resolution";
import { TransactionBreakdown } from "./transaction-breakdown";
import { OrganizationGrowthChart } from "./org-growth";
import { TopOrganizations } from "./transaction-volume";
import { StatCard } from "../component/stat-card";
import { TimeRange } from "../component/time-range";
import { getDateRangeFromTimeFrame } from "../component/time-range";
import { downloadJSON, downloadCSV } from "../utils/download";
import {
  mockTransactionBreakdown,
  mockOrganizations,
  mockGrowthData,
  mockAlertsData,
  mockActiveRules,
} from "../mock";

const timeFrames = ["All", "1D", "7D", "1M", "3M", "1Y", "Custom"] as const;
type TimeFrame = (typeof timeFrames)[number];

const OverviewPage: React.FC = () => {
  const [transactionData, setTransactionData] = useState(
    mockTransactionBreakdown
  );
  const [organizationsData, setOrganizationsData] = useState(mockOrganizations);
  const [growthData, setGrowthData] = useState(mockGrowthData);
  const [alertsData, setAlertsData] = useState(mockAlertsData);
  const [shouldFetchCustom, setShouldFetchCustom] = useState(false);
  const [rulesData, setRulesData] = useState(mockActiveRules);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1M");
  const [dateError, setDateError] = useState("");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
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

  const handleTransactionDownload = (data: any) => {
    console.log("Transaction breakdown download:", data);
    downloadJSON(data, "transaction-breakdown");
  };

  const handleOrganizationsDownload = (data: any) => {
    console.log("Organizations download:", data);
    downloadCSV(
      data,
      ["Organization", "Transaction Volume", "Volume Number"],
      "top-organizations"
    );
  };

  const handleGrowthDownload = (data: any) => {
    console.log("Growth chart download:", data);
    downloadJSON(data, `organization-growth-${data.period}`);
  };

  const handleAlertsDownload = (data: any) => {
    console.log("Alerts download:", data);
    downloadJSON(
      data,
      `alerts-resolved-vs-unresolved-${data.alertsAnalysis.period}`
    );
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

  const handlePeriodChange = (component: string, period: string) => {
    console.log(`${component} period changed to:`, period);
  };

  const timePeriodsConfig = {
    defaultPeriod: "Last 30 Days",
    periods: ["Last 7 Days", "Last 30 Days", "Last 90 Days", "Last Year"],
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="mt-5 text-text-primary text-[20px] font-medium">
        <div className="flex justify-between items-center">
          <div className="text-text-primary text-[18px] font-medium">
            Transactions
          </div>
          <TimeRange
            setTimeFrame={handleTimeFrameChange}
            timeFrame={timeFrame}
          />
          {timeFrame === "Custom" && (
            <div className="flex items-center gap-2 mt-2"></div>
          )}
          {timeFrame === "Custom" && dateError && (
            <div className="text-red-500 text-sm mt-1 ml-2">{dateError}</div>
          )}
        </div>
      </div>
      <div className="flex justify-between w-full gap-4">
        <StatCard
          title="Total Transactions Processed"
          value={"468K"}
          color="bg-primary"
        />
        <StatCard
          title="Total Flagged Transactions"
          value={"26K"}
          color="bg-primary"
        />
        <StatCard
          title="Total Transactions Value"
          value={"#450M"}
          color="bg-primary"
        />
      </div>

      <div className="max-h-screen">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-[49.5%_49.5%] gap-4 pb-3">
            <TransactionBreakdown
              data={transactionData}
              onDownload={handleTransactionDownload}
            />
            <TopOrganizations
              data={organizationsData}
              onDownload={handleOrganizationsDownload}
              maxItems={5}
            />
          </div>
          <div className="py-8">
            <div className="lg:col-span-1 md:col-span-2">
              <OrganizationGrowthChart
                data={growthData}
                timeConfig={timePeriodsConfig}
                totalOrganizations={604}
                onDownload={handleGrowthDownload}
                onPeriodChange={(period) =>
                  handlePeriodChange("Growth Chart", period)
                }
              />
            </div>
          </div>
          <AlertsResolution
            data={alertsData}
            timeConfig={timePeriodsConfig}
            onDownload={handleAlertsDownload}
            onPeriodChange={(period) => handlePeriodChange("Alerts", period)}
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
