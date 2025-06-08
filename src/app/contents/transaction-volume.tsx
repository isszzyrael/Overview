"use client";

import React from "react";
import { downloadCSV } from "../utils/download";
import { mockOrganizations, OrganizationVolume } from "../mock";
import { Icons } from "../component/icons";

interface TopOrganizationsProps {
  data?: OrganizationVolume[];
  onDownload?: (data: any) => void;
  maxItems?: number;
}

export const TopOrganizations: React.FC<TopOrganizationsProps> = ({
  data = mockOrganizations,
  onDownload,
  maxItems = 5,
}) => {
  const displayData = data.slice(0, maxItems);

  const handleDownload = () => {
    const csvData = displayData.map((org) => ({
      organization: org.name,
      transactionVolume: org.volume,
      volumeNumber: org.volumeNumber,
    }));

    if (onDownload) {
      onDownload(csvData);
    } else {
      downloadCSV(
        csvData,
        ["Organization", "Transaction Volume", "Volume Number"],
        "top-organizations"
      );
    }
  };

  return (
    <div className="text-white p-4 rounded-lg border border-[#2E2E2E]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">
          Top {maxItems} Org by Transaction Volume
        </h2>
        <button
          onClick={handleDownload}
          className="p-1.5 hover:bg-[#2E2E2E] rounded transition-colors cursor-pointer"
          title="Download organizations data as CSV"
        >
          <Icons.Download />
        </button>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-[50%_50%] text-s text-gray-300 mb-3 bg-[#2E2E2E] rounded px-2 py-1">
          <span>Organization</span>
          <span>Transaction Volume</span>
        </div>
        {displayData.map((org) => (
          <div
            key={org.id}
            className="grid grid-cols-[50%_50%] items-center py-2 border-b border-[#2E2E2E] px-2 transition-colors"
          >
            <span className="text-sm text-gray-200">{org.name}</span>
            <span className="text-sm text-gray-200">{org.volume}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
