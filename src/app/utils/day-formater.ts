import { GroupedData } from '@/app/contents/transaction-status/interface';

export const fillHours = (data: GroupedData[]) => {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  return hours.map(
    (hour) =>
      data.find((d) => d.label === hour) || {
        label: hour,
        approved: 0,
        reviewed: 0,
        declined: 0,
      },
  );
};

export const fillWeekDays = (data: GroupedData[]) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return weekDays.map(
    (day) =>
      data.find((d) => d.label === day) || {
        label: day,
        approved: 0,
        reviewed: 0,
        declined: 0,
      },
  );
};

export const fillMonthDays = (data: GroupedData[]) => {
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
  return days.map(
    (day) =>
      data.find((d) => d.label.startsWith(day)) || {
        label: day,
        approved: 0,
        reviewed: 0,
        declined: 0,
      },
  );
};

export const fillLastThreeMonths = (data: GroupedData[]) => {
  const months = ['Jan', 'Feb', 'Mar'].slice(-3);
  return months.map(
    (month) =>
      data.find((d) => d.label === month) || {
        label: month,
        approved: 0,
        reviewed: 0,
        declined: 0,
      },
  );
};

export const fillYearMonths = (data: GroupedData[]) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months.map(
    (month) =>
      data.find((d) => d.label === month) || {
        label: month,
        approved: 0,
        reviewed: 0,
        declined: 0,
      },
  );
};
