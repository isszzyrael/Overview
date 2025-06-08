"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Icons } from "../component/icons";
import { mockTransactionBreakdown, TransactionBreakdownData } from "../mock";
import { useEffect, useState } from "react";

// Only register Chart.js components in browser environment
if (typeof window !== "undefined") {
  ChartJS.register(ArcElement, Tooltip, Legend);
}

interface TransactionBreakdownProps {
  data?: TransactionBreakdownData;
}

export const TransactionBreakdown: React.FC<TransactionBreakdownProps> = ({
  data = mockTransactionBreakdown,
}) => {
  const total = data.approved + data.review + data.decline;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartData = {
    labels: ["Approved", "Review", "Decline"],
    datasets: [
      {
        data: [data.approved, data.review, data.decline],
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
        borderWidth: 0,
        borderRadius: 3,
        spacing: 2,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const percent = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
            return `${label}: ${(value)} (${percent}%)`;
          },
        },
      },
    },
  };

    return (
    <div className="text-white p-4 rounded-lg border border-[#2E2E2E]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Transaction Breakdown</h2>
        <button
          className="p-1.5 hover:bg-[#2E2E2E] rounded transition-colors cursor-pointer"
          title="Download transaction breakdown data"
        >
          <Icons.Download />
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative w-48 aspect-[1/1]">
          {isClient ? (
            <Doughnut data={chartData} options={chartOptions} />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-sm text-gray-400">Loading chart...</div>
            </div>
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-2xl font-semibold text-white">
              {(total)}
            </div>
            <div className="text-xs text-gray-400">Transactions</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-green-500 bg-[#121212]"></div>
          <span className="text-xs text-gray-300">Approved</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-yellow-500 bg-[#121212]"></div>
          <span className="text-xs text-gray-300">Review</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-red-500 bg-[#121212]"></div>
          <span className="text-xs text-gray-300">Decline</span>
        </div>
      </div>
    </div>
  );
};
