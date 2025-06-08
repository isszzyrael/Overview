import React from 'react';

interface IProps {
  setTimeFrame: React.Dispatch<
    React.SetStateAction<'1D' | '7D' | '1M' | '3M' | '1Y' | 'Custom'>
  >;
  timeFrame: '1D' | '7D' | '1M' | '3M' | '1Y' | 'Custom';
}

export const TimeRange: React.FC<IProps> = ({ timeFrame, setTimeFrame }) => {
  const timeFrames = ['1D', '7D', '1M', '3M', '1Y', 'Custom'] as const;

  return (
    <div className="flex space-x-2 px-3 h-7 rounded-lg bg-[#F2F4F7] justify-items-center">
      {timeFrames.map((tf) => (
        <button
          key={tf}
          onClick={() => setTimeFrame(tf)}
          className={`px-2 py-[2px] my-auto flex items-center h-6 rounded-[6px] ${
            timeFrame === tf
              ? 'bg-white text-text-primary'
              : 'bg-none text-text-tertiary '
          }`}
        >
          {tf}
        </button>
      ))}
    </div>
  );
};
