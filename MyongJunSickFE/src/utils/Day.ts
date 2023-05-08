import dayjs from 'dayjs';

dayjs.locale('ko');

export const nowYear = (): string => {
  return dayjs().format('YYYY');
};

export const nowMonth = (): string => {
  return dayjs().format('MM');
};

export const nowDay = (): string => {
  return dayjs().format('DD');
};

// day.js를 활용해 이번주 시작 월요일 ~ 금요일까지의 날짜를 배열로 반환
export const getWeek = (): string[] => {
  const week: string[] = [];
  const today = dayjs();
  const start = today.startOf('week');

  for (let i = 1; i < 6; i++) {
    week.push(start.add(i, 'day').format('DD'));
  }

  return week;
};

// 오늘 요일 number 반환
export const getDay = (): number => {
  const now = dayjs().day();
  console.log(now);
  // 주말 식단이 없으므로 1을 반환
  if (now === 0) return 1;
  if (now === 6) return 1;
  return now;
};
