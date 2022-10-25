import {atom, selector, useRecoilValue, useSetRecoilState} from 'recoil';
import axios from 'axios';

export const restInfo = atom({
  key: 'restInfo',
  default: '인문캠퍼스',
});

// 식단 정보를 가져오는 API
export const getDayByMeal = selector({
  key: 'dayByMeal/get',
  get: async ({get}) => {
    const response = await axios.get(
      'https://gea662yjyk.execute-api.ap-northeast-2.amazonaws.com/info',
    );
    console.log(response.data);
    return response.data;
  },
});

export const monData = atom({
  key: 'monday',
  default: {},
});

export const tueData = atom({
  key: 'tuesday',
  default: {},
});

export const wedData = atom({
  key: 'wednesday',
  default: {},
});

export const thuData = atom({
  key: 'thursday',
  default: {},
});

export const friData = atom({
  key: 'friday',
  default: {},
});

export const isLunchSubmit = atom({
  key: 'isLunchSubmit',
  default: false,
});

export const isDinnerSubmit = atom({
  key: 'isDinnerSubmit',
  default: false,
});

export function splitMealData() {
  const mealData = useRecoilValue(getDayByMeal);
  const setMon = useSetRecoilState(monData);
  const setTue = useSetRecoilState(tueData);
  const setWed = useSetRecoilState(wedData);
  const setThu = useSetRecoilState(thuData);
  const setFri = useSetRecoilState(friData);

  mealData.map(item => {
    if (item.day === '월') {
      setMon(item);
    } else if (item.day === '화') {
      setTue(item);
    } else if (item.day === '수') {
      setWed(item);
    } else if (item.day === '목') {
      setThu(item);
    } else if (item.day === '금') {
      setFri(item);
    }
  });
}

// 식단 정보를 가져오는 API
export const getDayByMeal2 = selector({
  key: 'dayByMeal/get2',
  get: async ({get}) => {
    const response2 = await axios.get(
      'https://gea662yjyk.execute-api.ap-northeast-2.amazonaws.com/newJacamCrawler',
    );
    console.log(response2.data);
    return response2.data;
  },
});

export const monData2 = atom({
  key: 'monday2',
  default: {},
});

export const tueData2 = atom({
  key: 'tuesday2',
  default: {},
});

export const wedData2 = atom({
  key: 'wednesday2',
  default: {},
});

export const thuData2 = atom({
  key: 'thursday2',
  default: {},
});

export const friData2 = atom({
  key: 'friday2',
  default: {},
});

export const isLunchSubmit2 = atom({
  key: 'isLunchSubmit2',
  default: false,
});

export const isDinnerSubmit2 = atom({
  key: 'isDinnerSubmit2',
  default: false,
});

export function splitMealData2() {
  const mealData2 = useRecoilValue(getDayByMeal2);
  const setMon2 = useSetRecoilState(monData2);
  const setTue2 = useSetRecoilState(tueData2);
  const setWed2 = useSetRecoilState(wedData2);
  const setThu2 = useSetRecoilState(thuData2);
  const setFri2 = useSetRecoilState(friData2);

  mealData2.map(item => {
    if (item.day === '월') {
      setMon2(item);
    } else if (item.day === '화') {
      setTue2(item);
    } else if (item.day === '수') {
      setWed2(item);
    } else if (item.day === '목') {
      setThu2(item);
    } else if (item.day === '금') {
      setFri2(item);
    }
  });
}
