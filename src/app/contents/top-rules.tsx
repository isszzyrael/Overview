"use client";

import React from "react";
import { Icons } from "../component/icons";
import {
  mockActiveRules,
  ActiveRule,
} from "../mock";

interface TopActiveRulesProps {
  data?: ActiveRule[];
  maxItems?: number;
}

export const TopActiveRules: React.FC<TopActiveRulesProps> = ({
  data = mockActiveRules,
  maxItems = 5,
}) => {
  const displayData = data.slice(0, maxItems);

  return (
    <div className="text-white p-4 rounded-lg border border-[#2E2E2E]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Top {maxItems} Active Rules</h2>
        <div className="flex items-center space-x-2">
          <button
            className="p-1.5 hover:bg-[#2E2E2E] rounded transition-colors cursor-pointer"
            title="Download active rules data as CSV"
          >
            <Icons.Download />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-[50%_50%] text-s text-gray-300 mb-3 bg-[#2E2E2E] rounded px-2 py-1">
          <span>Rule Code</span>
          <span>Transactions Flagged</span>
        </div>
        {displayData.map((rule) => (
          <div
            key={rule.id}
            className="grid grid-cols-[50%_50%] items-center py-2 border-b border-[#2E2E2E] px-2 transition-colors"
          >
            <span className="text-xs text-gray-200">{rule.code}</span>
            <span className="text-xs text-gray-200">{rule.transactions}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
