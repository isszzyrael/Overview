import React, { useState } from 'react';
import { Status } from './item';

interface ICommentProps {
  status: any;
  value?: string;
  percent: string;
}

const Amount = (props: ICommentProps) => {
  const { status, percent, value } = props;
  return (
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
  );
};

export const Amounts = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className=" overflow-y-auto flex flex-col gap-6">
        <Amount
          value="0.0NGN"
          percent="0.0%"
          status={<Status label={'Approve'} color={'bg-[#10B978]'} />}
        />
        <Amount
          value="0.0NGN"
          percent="0.0%"
          status={<Status label={'Review'} color={'bg-[#F59E0B]'} />}
        />
        <Amount
          value="0.0NGN"
          percent="0.0%"
          status={<Status label={'Decline'} color={'bg-[#FF4D4D]'} />}
        />
      </div>
    </div>
  );
};
