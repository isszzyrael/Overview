"use client";
import { useState } from "react";
import { Counts } from "./count";
import { Amounts } from "./amount";

import TabToggleOutline from '@/app/component/outline-toggle';


enum Tabs {
  Amount = "Amount",
  Count = "Count",
}

export const TransactionReportTabs = () => {
  const [currentTab, setCurrentTab] = useState<string>(Tabs.Amount);

  return (
    <div className="flex flex-col flex-1 w-full py-4">
      <div className="flex justify-center">
        <TabToggleOutline
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabs={Object.values(Tabs)}
        />
      </div>

      <div aria-label="Content" className="flex w-full flex-col p-4 gap-6">
        {currentTab === Tabs.Amount && <Amounts />}
        {currentTab === Tabs.Count && <Counts />}
      </div>
    </div>
  );
};
