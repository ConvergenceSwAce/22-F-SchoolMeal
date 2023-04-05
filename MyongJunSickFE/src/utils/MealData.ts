import dummyData from './dummyData.json';

type MealData = {
  date: string;
  day: string;
  lunchA: string[];
  lunchB: string[];
  dinner: string[];
};

// 선택한 날짜의 데이터를 반환
export const getMealData = (day: string): MealData => {
  const data = dummyData.find(item => item.day === day);
  if (!data) {
    throw new Error('해당 날짜의 데이터가 없습니다.');
  }
  return data;
};
