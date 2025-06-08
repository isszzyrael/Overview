'use client';

import React, { useState, useMemo, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  Filler,
} from 'chart.js';
import { GroupedData, Transaction } from './interface';
import { mockData, options, transactionStatus } from './mock';
import {
  fillHours,
  fillLastThreeMonths,
  fillMonthDays,
  fillWeekDays,
  fillYearMonths,
} from '@/app/utils/day-formater';
import { Filters, TimeRange } from './sub-components';
import SelectDropdown from './sub-components/select-drop-down-main';
import {
  groupByDayOfMonth,
  groupByHour,
  groupByLastThreeMonths,
  groupByMonth,
  groupByWeekDay,
} from './helper';

ChartJS.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const timeFrames = ['1D', '7D', '1M', '3M', '1Y', 'Custom'] as const;
type TimeFrame = (typeof timeFrames)[number];

export const TransactionsStatusChart = ({
  data = mockData,
}: {
  data?: Transaction[];
}) => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('1Y');
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const [status, setStatus] = useState('Label: Approved');

  const filteredData = useMemo(() => {
    switch (timeFrame) {
      case '1D':
        return fillHours(groupByHour(data));
      case '7D':
        return fillWeekDays(groupByWeekDay(data));
      case '1M':
        return fillMonthDays(groupByDayOfMonth(data));
      case '3M':
        return fillLastThreeMonths(groupByLastThreeMonths(data));
      case '1Y':
      default:
        return fillYearMonths(groupByMonth(data));
    }
  }, [timeFrame, data]);

  const statusMap = {
    'Label: Approved': 'approved',
    'Label: Reviewed': 'reviewed',
    'Label: Declined': 'declined',
  };

  const selectedStatus = (statusMap as any)[status];

  const chartData = {
    labels: filteredData.map((d) => d.label),
    datasets: [
      {
        label: status.replace('Label: ', ''),
        data: filteredData.map((d) => (d as any)[selectedStatus]),
        borderColor:
          selectedStatus === 'approved'
            ? '#10B978'
            : selectedStatus === 'reviewed'
            ? '#F59E0B'
            : '#FF4D4D',
        backgroundColor:
          selectedStatus === 'approved'
            ? '#10B978'
            : selectedStatus === 'reviewed'
            ? '#F59E0B'
            : '#FF4D4D',
        tension: 0,
      },
    ],
  };

  return (
    <div className="py-5 px-8">
      <div className="w-full flex justify-between gap-4 py-5">
        <h4 className="!w-[776px]">Transaction Status</h4>
        <TimeRange timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className='col-span-5'>
          <Filters />

          <Line
            data={chartData}
            options={options as any}
            className="!w-full !h-[300px]"
          />
        </div>
        <div className="flex flex-col col-span-2 gap-3">
          <SelectDropdown
            label=""
            placeholder="On every database change"
            data={transactionStatus}
            className="mt-5"
            value={status}
            handleSelect={(val) => {
              setStatus(val);
            }}
          />

          <div className="grid gap-4 mt-2">
            <div className="">
              <p className="text-sm text-text-tertiary">
                Total number of transactions
              </p>
              <p className="text-xl text-text-secondary">38</p>
            </div>
            <div className="">
              <p className="text-sm text-text-tertiary">Total value in NGN</p>
              <p className="text-xl text-text-secondary">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
