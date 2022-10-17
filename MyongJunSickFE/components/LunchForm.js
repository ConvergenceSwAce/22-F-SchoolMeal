import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentage, widthPercentage} from '../Responsive';
import Btn from './Btn';
import MealSatisfaction from './MealSatisfaction';

export default function LunchForm({mealData, title}) {
  return (
    <View>
      <MealSatisfaction message={title} />
      <View style={btn.component}>
        <Btn type="중식" btnName="네!" data={mealData} />
        <Btn type="중식" btnName="아니요.." data={mealData} />
      </View>
    </View>
  );
}

const btn = StyleSheet.create({
  component: {
    //박스를 감싸고 있는 컴포넌트
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: widthPercentage(12),
    marginTop: heightPercentage(16),
  },
});
