import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentage, widthPercentage} from '../Responsive';
import Btn from './Btn';
import MealSatisfaction from './MealSatisfaction';

export default function LunchForm({mealData}) {
  return (
    <View>
      <MealSatisfaction message="오늘의 중식 만족하시나요?" />
      <View style={btn.component}>
        <Btn type="중식" btnName="네!" data={mealData.lunch} />
        <Btn type="중식" btnName="아니요.." data={mealData.lunch} />
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
