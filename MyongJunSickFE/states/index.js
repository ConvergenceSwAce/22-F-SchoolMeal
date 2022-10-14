import {useState} from 'react';

import Config from 'react-native-config';
import {atom, selector, useRecoilState} from 'recoil';
import axios from 'axios';

Config.API_URL;

export const mon = {};
export const tue = {};
export const wed = {};
export const thu = {};
export const fri = {};



const getDay = () => {
  dayByMeal.map(item => {
    if (item.day === '월') {
      mon = item;
    } else if (item.day === '화') {
      tue = item;
    } else if (item.day === '수') {
      wed = item;
    } else if (item.day === '목') {
      thu = item;
    } else if (item.day === '금') {
      fri = item;
    }
  });
};

export const DayByMealState = atom({
  key: 'DayByMealState',
  default: [],
});

export const [dayByMeal, setDayByMeal] = DayByMealState;

export const getDayByMeal = selector({
  key: 'getDayByMeal',
  get: async () => {
    const res = await axios.get(`${Config.API_URL}/info`);
    console.log(res.data);
    setDayByMeal(res.data);
    getDay();
    return dayByMeal;
  },
});
