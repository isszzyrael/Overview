"use client";

import React from "react";
import { useState } from "react";
import { AlertsResolution } from "./alert-resolution";
import { TransactionBreakdown } from "./transaction-breakdown";
import { OrganizationGrowthChart } from "./org-growth";
import { TopOrganizations } from "./transaction-volume";
import { StatCard } from "../component/stat-card";
import {
  mockTransactionBreakdown,
  mockOrganizations,
  mockGrowthData,
  mockAlertsData,
} from "../mock";
import { TransactionsStatusChart } from "./transaction-status";

const OverviewPage: React.FC = () => {
  const [transactionData] = useState(mockTransactionBreakdown);
  const [organizationsData] = useState(mockOrganizations);
  const [growthData] = useState(mockGrowthData);
  const [alertsData] = useState(mockAlertsData);

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
          <p>Time Stamp</p>
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
            <TransactionBreakdown data={transactionData} />
            <TopOrganizations data={organizationsData} maxItems={5} />
          </div>
          <div className="py-8">
            <div className="lg:col-span-1 md:col-span-2">
              <OrganizationGrowthChart
                data={growthData}
                timeConfig={timePeriodsConfig}
                totalOrganizations={604}
              />
            </div>
          </div>
          <AlertsResolution data={alertsData} timeConfig={timePeriodsConfig} />
        </div>
        <TransactionsStatusChart />
      </div>
    </div>
  );
};

export default OverviewPage;
