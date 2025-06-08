export interface TransactionBreakdownData {
  approved: number;
  review: number;
  decline: number;
}

export interface OrganizationVolume {
  id: string;
  name: string;
  volume: string;
  volumeNumber: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  period: string;
}

export interface AlertsData {
  resolved: {
    percentage: number;
    transactions: string;
    transactionNumber: number;
  };
  unresolved: {
    percentage: number;
    transactions: string;
    transactionNumber: number;
  };
  pending?: {
    percentage: number;
    transactions: string;
    transactionNumber: number;
  };
}

export interface ActiveRule {
  id: string;
  code: string;
  transactions: string;
  transactionNumber: number;
  description?: string;
}

export interface TimePeriodsConfig {
  periods: string[];
  defaultPeriod: string;
}

export const mockTransactionBreakdown: TransactionBreakdownData = {
  approved: 280000,
  review: 120000,
  decline: 68000
};


export const mockOrganizations: OrganizationVolume[] = [
  { id: '1', name: "Biffco Enterprises Ltd.", volume: "125k", volumeNumber: 125000 },
  { id: '2', name: "Abstergo Ltd.", volume: "89k", volumeNumber: 89000 },
  { id: '3', name: "Binford Ltd.", volume: "72k", volumeNumber: 72000 },
  { id: '4', name: "Barone LLC.", volume: "58k", volumeNumber: 58000 },
  { id: '5', name: "Acme Co.", volume: "45k", volumeNumber: 45000 },
  { id: '6', name: "Other Organizations", volume: "79k", volumeNumber: 79000 }
];

export const mockGrowthData: ChartDataPoint[] = [
  { date: '01', value: 285, period: '1M' },
  { date: '03', value: 312, period: '1M' },
  { date: '05', value: 298, period: '1M' },
  { date: '07', value: 445, period: '1M' },
  { date: '09', value: 287, period: '1M' },
  { date: '11', value: 523, period: '1M' },
  { date: '13', value: 389, period: '1M' },
  { date: '15', value: 678, period: '1M' },
  { date: '17', value: 612, period: '1M' },
  { date: '19', value: 534, period: '1M' },
  { date: '21', value: 445, period: '1M' },
  { date: '23', value: 567, period: '1M' },
  { date: '25', value: 489, period: '1M' },
  { date: '27', value: 423, period: '1M' },
  { date: '29', value: 456, period: '1M' },
  { date: '31', value: 478, period: '1M' }
];

export const mockAlertsData: AlertsData = {
  resolved: {
    percentage: 63,
    transactions: '271k',
    transactionNumber: 271000
  },
  unresolved: {
    percentage: 37,
    transactions: '173k',
    transactionNumber: 173000
  },
};

export const mockActiveRules: ActiveRule[] = [
  { id: '1', code: "JK9012", transactions: "187k", transactionNumber: 187000, description: "High-value transaction monitoring" },
  { id: '2', code: "LM3456", transactions: "156k", transactionNumber: 156000, description: "Velocity check rule" },
  { id: '3', code: "QR7890", transactions: "134k", transactionNumber: 134000, description: "Geographic anomaly detection" },
  { id: '4', code: "CD4321", transactions: "98k", transactionNumber: 98000, description: "Pattern recognition rule" },
  { id: '5', code: "GH2109", transactions: "76k", transactionNumber: 76000, description: "Behavioral analysis rule" },
  { id: '6', code: "ST5678", transactions: "45k", transactionNumber: 45000, description: "Device fingerprinting rule" }
];

export const timePeriodsConfig: TimePeriodsConfig = {
  periods: ['1D', '7D', '1M', '3M', '1Y', 'Custom'],
  defaultPeriod: '1M'
};

// Utility function to add realistic variance
function addVariance(baseValue: number, variancePercent: number = 0.15): number {
  const variance = baseValue * variancePercent * (Math.random() - 0.5) * 2;
  return Math.max(0, Math.floor(baseValue + variance));
}

// More realistic time-based factors with variance
function getTimeFactor(timeFrame: string): number {
  const baseFactors: Record<string, number> = {
    '1D': 0.003,  // ~0.3% of monthly (roughly 1/30th)
    '7D': 0.025,  // ~2.5% of monthly (roughly 1/4th of month)
    '1M': 1,      // Base period
    '3M': 3.1,    // Slightly more than 3x due to growth
    '1Y': 12.5,   // Slightly more than 12x due to annual growth
    'All': 15     // Historical data beyond 1 year
  };
  
  const baseFactor = baseFactors[timeFrame] || 1;
  // Add realistic variance (±10%)
  return baseFactor * (0.9 + Math.random() * 0.2);
}




// Improved organization data generation
export function generateMockOrganizations(timeFrame: string): OrganizationVolume[] {
  const factor = getTimeFactor(timeFrame);
  
  // Base volumes that sum to less than total system volume
  const baseOrgs = [
    { id: '1', name: "Biffco Enterprises Ltd.", baseVolume: 125000 },
    { id: '2', name: "Abstergo Ltd.", baseVolume: 89000 },
    { id: '3', name: "Binford Ltd.", baseVolume: 72000 },
    { id: '4', name: "Barone LLC.", baseVolume: 58000 },
    { id: '5', name: "Acme Co.", baseVolume: 45000 },
    { id: '6', name: "Other Organizations", baseVolume: 79000 }
  ];

  return baseOrgs.map(org => {
    const scaledVolume = addVariance(Math.floor(org.baseVolume * factor));
    const volumeK = Math.round(scaledVolume / 1000);
    
    return {
      ...org,
      volume: `${volumeK}k`,
      volumeNumber: scaledVolume
    };
  });
}


// Improved active rules generation
export function generateMockActiveRules(timeFrame: string): ActiveRule[] {
  const factor = getTimeFactor(timeFrame);
  
  const baseRules = [
    { id: '1', code: "JK9012", baseVolume: 187000, description: "High-value transaction monitoring" },
    { id: '2', code: "LM3456", baseVolume: 156000, description: "Velocity check rule" },
    { id: '3', code: "QR7890", baseVolume: 134000, description: "Geographic anomaly detection" },
    { id: '4', code: "CD4321", baseVolume: 98000, description: "Pattern recognition rule" },
    { id: '5', code: "GH2109", baseVolume: 76000, description: "Behavioral analysis rule" },
    { id: '6', code: "ST5678", baseVolume: 45000, description: "Device fingerprinting rule" }
  ];

  return baseRules.map(rule => {
    const scaledVolume = addVariance(Math.floor(rule.baseVolume * factor));
    const volumeK = Math.round(scaledVolume / 1000);
    
    return {
      ...rule,
      transactions: `${volumeK}k`,
      transactionNumber: scaledVolume
    };
  });
}
