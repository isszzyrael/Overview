import React from "react";

interface IProps {
  setTimeFrame: React.Dispatch<
    React.SetStateAction<"All" | "1D" | "7D" | "1M" | "3M" | "1Y" | "Custom">
  >;
  timeFrame: "All" | "1D" | "7D" | "1M" | "3M" | "1Y" | "Custom";
}

export const TimeRange: React.FC<IProps> = ({ timeFrame, setTimeFrame }) => {
  const timeFrames = ["All", "1D", "7D", "1M", "3M", "1Y", "Custom"] as const;

  return (
    <div className="flex space-x-2 px-3 h-7 rounded-md bg-[#2E2E2E] items-center">
      {timeFrames.map((tf) => (
        <button
          key={tf}
          onClick={() => setTimeFrame(tf)}
          className={`text-sm px-2 py-[2px] my-auto flex items-center h-6 rounded-[6px] cursor-pointer ${
            timeFrame === tf
              ? "bg-[#121212] text-text-primary"
              : "bg-none text-text-tertiary"
          }`}
        >
          {tf}
        </button>
      ))}
    </div>
  );
};

export const getDateRangeFromTimeFrame = (
  timeFrame: string,
  customRange?: { from: string; to: string }
) => {
  const now = new Date();
  let fromDate = new Date();

  switch (timeFrame) {
    case "1D":
      fromDate.setDate(now.getDate() - 1);
      break;
    case "7D":
      fromDate.setDate(now.getDate() - 7);
      break;
    case "1M":
      fromDate.setMonth(now.getMonth() - 1);
      break;
    case "3M":
      fromDate.setMonth(now.getMonth() - 3);
      break;
    case "1Y":
      fromDate.setFullYear(now.getFullYear() - 1);
      break;
    case "Custom":
      return {
        fromDate: customRange?.from || "",
        toDate: customRange?.to || "",
      };
    case "All":
      return {
        fromDate: "",
        toDate: "",
      };
    default:
      break;
  }

  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return {
    fromDate: formatDate(fromDate),
    toDate: formatDate(now),
  };
};
