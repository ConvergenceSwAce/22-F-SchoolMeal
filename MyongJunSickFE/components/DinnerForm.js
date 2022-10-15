import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentage, widthPercentage} from '../Responsive';
import Btn from './Btn';
import MealSatisfaction from './MealSatisfaction';

export default function DinnerForm({mealData}) {
  return (
    <View>
      <MealSatisfaction message="오늘의 석식 만족하시나요?" />
      <View style={btn.component}>
        <Btn type="석식" btnName="네!" data={mealData.dinner} />
        <Btn type="석식" btnName="아니요.." data={mealData.dinner} />
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
