import dayjs from 'dayjs';

export const nowYear = (): string => {
  return dayjs().format('YYYY');
};

export const nowMonth = (): string => {
  return dayjs().format('MM');
};
