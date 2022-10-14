import {atom, selector, useRecoilValue, useSetRecoilState} from 'recoil';
import axios from 'axios';

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
