export const mockData = [
  {
    timestamp: '2025-01-02T01:00:00Z',
    approved: 300,
    reviewed: 40,
    declined: 1000,
  },
  {
    timestamp: '2025-02-24T01:00:00Z',
    approved: 200,
    reviewed: 50,
    declined: 20,
  },
  {
    timestamp: '2025-02-24T02:00:00Z',
    approved: 300,
    reviewed: 80,
    declined: 400,
  },
  {
    timestamp: '2025-02-24T03:00:00Z',
    approved: 400,
    reviewed: 100,
    declined: 50,
  },
  {
    timestamp: '2025-02-02T04:00:00Z',
    approved: 2250,
    reviewed: 70,
    declined: 180,
  },
  {
    timestamp: '2025-09-14T04:00:00Z',
    approved: 290,
    reviewed: 70,
    declined: 40,
  },
  {
    timestamp: '2025-02-22T05:00:00Z',
    approved: 1000,
    reviewed: 150,
    declined: 70,
  },
  {
    timestamp: '2025-03-01T05:00:00Z',
    approved: 600,
    reviewed: 200,
    declined: 10,
  },
  {
    timestamp: '2025-03-15T05:00:00Z',
    approved: 450,
    reviewed: 100,
    declined: 50,
  },
  {
    timestamp: '2025-04-10T05:00:00Z',
    approved: 380,
    reviewed: 350,
    declined: 120,
  },
  {
    timestamp: '2025-05-05T05:00:00Z',
    approved: 600,
    reviewed: 350,
    declined: 150,
  },
  {
    timestamp: '2025-06-24T05:00:00Z',
    approved: 900,
    reviewed: 400,
    declined: 200,
  },
  {
    timestamp: '2025-07-10T05:00:00Z',
    approved: 800,
    reviewed: 350,
    declined: 250,
  },
  {
    timestamp: '2025-08-20T05:00:00Z',
    approved: 1100,
    reviewed: 500,
    declined: 300,
  },
  {
    timestamp: '2025-09-24T11:00:00Z',
    approved: 1200,
    reviewed: 550,
    declined: 350,
  },
  {
    timestamp: '2025-10-18T03:00:00Z',
    approved: 900,
    reviewed: 400,
    declined: 700,
  },
  {
    timestamp: '2025-11-24T03:00:00Z',
    approved: 1400,
    reviewed: 650,
    declined: 450,
  },
  {
    timestamp: '2025-12-24T03:00:00Z',
    approved: 1500,
    reviewed: 500,
    declined: 400,
  },
];

export const yearDta = [
  {
    label: 'Feb',
    approved: 4440,
    reviewed: 520,
    declined: 400,
  },
  {
    label: 'Mar',
    approved: 1050,
    reviewed: 300,
    declined: 60,
  },
  {
    label: 'Apr',
    approved: 380,
    reviewed: 350,
    declined: 120,
  },
  {
    label: 'May',
    approved: 600,
    reviewed: 350,
    declined: 150,
  },
  {
    label: 'Jun',
    approved: 900,
    reviewed: 400,
    declined: 200,
  },
  {
    label: 'Jul',
    approved: 800,
    reviewed: 350,
    declined: 250,
  },
  {
    label: 'Aug',
    approved: 1100,
    reviewed: 500,
    declined: 300,
  },
  {
    label: 'Sep',
    approved: 1200,
    reviewed: 550,
    declined: 350,
  },
  {
    label: 'Oct',
    approved: 900,
    reviewed: 400,
    declined: 700,
  },
  {
    label: 'Nov',
    approved: 1400,
    reviewed: 650,
    declined: 450,
  },
  {
    label: 'Dec',
    approved: 1500,
    reviewed: 500,
    declined: 400,
  },
];

export const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    datalabels: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'black',
      bodyFont: {
        size: 14,
        weight: 'bold',
        lineHeight: 1.6,
        letterSpacing: 1.2,
      },
      padding: { x: 26, y: 8 },
      cornerRadius: 8,
      displayColors: true,
      boxWidth: 12,
      boxHeight: 12,
      boxPadding: 6,
      position: 'nearest',
      multiKeyBackground: 'transparent', // Remove default box background
      callbacks: {
        label: (context: any) => {
          const datasetLabel = context.dataset.label || '';
          const value = context.raw;
          const date = context.label;
          return [
            `${value} Transactions`,
            `Status: ${datasetLabel}`,
            `Range: ${date}`,
          ];
        },
        labelColor: (context: any) => {
          const colorMap: Record<string, string> = {
            Approved: '#10B978',
            Reviewed: '#F59E0B',
            Declined: '#FF4D4D',
          };

          return {
            borderColor: 'transparent',
            backgroundColor: colorMap[context.dataset.label],
            borderWidth: 0,
          };
        },
      },
      titleFont: {
        size: 14,
        weight: 'bold',
        letterSpacing: 1.5, // Add letter spacing to the title
      },
    },
  },
  interaction: {
    mode: 'nearest',
    intersect: false,
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hoverRadius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: false,
      grid: {
        display: true,
      },
      ticks: {
        maxTicksLimit: 6,
      },
    },
  },
};

export const transactionStatus = [
  {
    label: 'Label: Approved',
    value: 'approve',
  },
  {
    label: 'Label: Reviewed',
    value: 'review',
  },
  {
    label: 'Label: Declined',
    value: 'decline',
  },
];
