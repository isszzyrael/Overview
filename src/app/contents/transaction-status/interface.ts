export type Transaction = {
  timestamp: string;
  approved: number;
  reviewed: number;
  declined: number;
};

export type GroupedData = {
  label: string;
  approved: number;
  reviewed: number;
  declined: number;
};

export type IRuleSummary = {
  timestamp: string;
  
};
