import { GroupedData, Transaction } from "./interface";

export const groupByHour = (data: Transaction[]): GroupedData[] => {
    return groupData(data, { hour: '2-digit', minute: '2-digit' });
  };
  
  export const groupByWeekDay = (data: Transaction[]): GroupedData[] => {
    return groupData(data, { weekday: 'short' });
  };
  
  export const groupByDayOfMonth = (data: Transaction[]): GroupedData[] => {
    const currentMonth = new Date().toLocaleString('default', { month: 'short' });
  
    const monthFilteredData = data.filter((d) => {
      const month = new Date(d.timestamp).toLocaleString('default', {
        month: 'short',
      });
      return month === currentMonth;
    });
    return groupData(monthFilteredData, { day: 'numeric', month: 'short' });
  };
  
  export const groupByLastThreeMonths = (data: Transaction[]): GroupedData[] => {
    return groupData(data, { month: 'short' });
  };
  
  export const groupByMonth = (data: Transaction[]): GroupedData[] => {
    return groupData(data, { month: 'short' });
  };
  
  export const groupData = (
    data: Transaction[],
    format: Intl.DateTimeFormatOptions,
  ): GroupedData[] => {
    const grouped = data.reduce<Record<string, GroupedData>>((acc, item) => {
      const label = new Date(item.timestamp).toLocaleDateString('en-US', format);
      if (!acc[label])
        acc[label] = { label, approved: 0, reviewed: 0, declined: 0 };
      acc[label].approved += item.approved;
      acc[label].reviewed += item.reviewed;
      acc[label].declined += item.declined;
      return acc;
    }, {});
  
    return Object.values(grouped);
  };
  