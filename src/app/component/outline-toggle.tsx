'use client';
import { FC } from 'react';

interface Props {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  tabs: string[];
}

const TabToggleOutline: FC<Props> = ({ currentTab, setCurrentTab, tabs }) => {
  return (
    <div aria-label="Tabs" className="flex">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${
            currentTab === tab
              ? 'text-text-primary border-b-2 border-solid border-b-text-primary'
              : 'cursor-pointer text-text-tertiary'
          } py-2 px-4 font-medium text-sm transition-all ease-in-out duration-100`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabToggleOutline;
