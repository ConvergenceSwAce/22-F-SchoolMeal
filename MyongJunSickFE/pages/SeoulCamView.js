import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Btn from '../components/Btn';
import DinnerForm from '../components/DinnerForm';
import LunchForm from '../components/LunchForm';
import MealCarousel from '../components/MealCarousel';
import MealTiltle from '../components/MealTiltle';
import MenuList from '../components/MenuList';
import {heightPercentage} from '../Responsive';

export default function SeoulCamView({mealData}) {
  return (
    <ScrollView>
      <MealTiltle type={'중식'} time={'11-30 : 14:00'} />
      <MealCarousel data={mealData} />
      <MealTiltle type={'석식'} time={'17-30 : 19:00'} />
      <MenuList data={mealData.dinner} />
      <DinnerForm mealData={mealData} title={'석식'} />
      <View style={{height: heightPercentage(50)}} />
    </ScrollView>
  );
}
