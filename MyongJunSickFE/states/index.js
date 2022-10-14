import Config from 'react-native-config';
import {atom, selector, useRecoilValue, useSetRecoilState} from 'recoil';
import axios from 'axios';

Config.API_URL;

// 식단 정보를 가져오는 API
export const getDayByMeal = selector({
  key: 'dayByMeal/get',
  get: async ({get}) => {
    const response = await axios.get(`${Config.API_URL}/info`);
    return response.data;
  },
});

export const monData = atom({
  key: 'monday',
  default: {},
  pressed: false,
});

export const tueData = atom({
  key: 'tuesday',
  default: {},
  pressed: false,
});

export const wedData = atom({
  key: 'wednesday',
  default: {},
  pressed: false,
});

export const thuData = atom({
  key: 'thursday',
  default: {},
  pressed: false,
});

export const friData = atom({
  key: 'friday',
  default: {},
  pressed: false,
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
