import { FC } from 'react';

const statuses = [
  { label: 'Approve', color: 'bg-green-500' },
  { label: 'Review', color: 'bg-yellow-500' },
  { label: 'Decline', color: 'bg-red-500' },
];

export const Status: FC<{ label: string; color: string }> = ({
  label,
  color,
}) => (
  <div className="flex items-center gap-2">
    <span className={`${color} w-3 h-3 rounded-full`} />
    <span className="text-gray-700">{label}</span>
  </div>
);
