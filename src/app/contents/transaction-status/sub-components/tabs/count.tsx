import React, { useState } from 'react';
import { Status } from './item';

interface ICommentProps {
  status: any;
  value?: string;
  percent: string;
  type: string;
}

const bgColors = {
  approve: 'bg-[#10B978]',
  decline: 'bg-[#FF4D4D]',
  review: 'bg-[#F59E0B]',
};

const Amount = (props: ICommentProps) => {
  const { status, percent, value, type } = props;
  return (
    <div className="flex flex-col gap-1 justify-between">
      <div className="flex gap-3 justify-between">
        <div className="flex flex-col gap-2">
          {status}
          <p>{value}</p>
        </div>
        <div className="flex gap-2">
          <p className="whitespace-nowrap text-text-secondary text-xl font-normal">
            {percent}
          </p>
        </div>
      </div>
      <div className="flex gap-2 nowrap h-[6px] bg-border_color-100 w-full">
        <p
          style={{
            width: `${percent}`,
          }}
          className={`h-full rounded-lg ${(bgColors as any)[type]}`}
        ></p>
      </div>
    </div>
  );
};

export const Counts = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className=" overflow-y-auto flex flex-col gap-6">
        <Amount
          value="35"
          percent="90.0%"
          status={<Status label={'Approve'} color={'bg-[#10B978]'} />}
          type="approve"
        />
        <Amount
          value="3"
          percent="5.3%"
          status={<Status label={'Review'} color={'bg-[#F59E0B]'} />}
          type="review"
        />
        <Amount
          value="1"
          percent="2.6%"
          status={<Status label={'Decline'} color={'bg-[#FF4D4D]'} />}
          type="decline"
        />
      </div>
    </div>
  );
};
