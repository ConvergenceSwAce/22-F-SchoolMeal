import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Btn from '../components/Btn';
import DinnerForm from '../components/DinnerForm';
import LunchForm from '../components/LunchForm';
import MealCarousel from '../components/MealCarousel';
import MealTiltle from '../components/MealTiltle';
import MenuList from '../components/MenuList';

const dummy = [
  {
    date: '10.17',
    day: '월',
    lunchA: ['베이컨김치볶음밥', '맑은우동국물', '피쉬앤칩스&케찹', '단무지', '배추김치'],
    lunchB: [
      '모짜렐라치즈 돈가츠',
      '맑은우동국물',
      '추가밥',
      '스위트콘&그린샐러드',
      '오이피클',
      '배추김치',
    ],
    dinner: [
      '해물볶음우동',
      '말은우동국물',
      '추가밥',
      '모둠튀김(고구마/단호박/김말이)',
      '단무지',
      '배추김치',
    ],
  },
];

export default function SeoulCamView() {
  return (
    <ScrollView>
      <MealTiltle type={'중식'} time={'11-30 : 14:00'} />
      <MealCarousel />
      <MealTiltle type={'석식'} time={'17-30 : 19:00'} />
      <MenuList data={dummy[0].dinner} />
      <DinnerForm mealData={dummy[0].dinner} title={'석식'} />
    </ScrollView>
  );
}
