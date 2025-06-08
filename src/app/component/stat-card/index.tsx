import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color: string;
  onClick?: () => void; // Add this new prop
  loading?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  onClick,
  loading = false,
}) => {
  return (
    <div
      className="border border-[#2E2E2E] rounded-[10px] py-[20px] px-[16px] w-full flex flex-row gap-4 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center">{icon}</div>
      {loading ? (
        <div>
          <div className="animate-pulse bg-[#2E2E2E] h-[24px] w-[24px] rounded-full" />
          <div className="animate-pulse bg-[#2E2E2E] h-[24px] w-[100px] rounded-full mt-2" />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="text-text-primary text-[24px] font-bold">{value}</div>
          <div className="text-text-primary text-[18px] text-gray-300">
            {title}
          </div>
        </div>
      )}
    </div>
  );
};
