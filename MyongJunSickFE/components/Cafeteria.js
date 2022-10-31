import dayjs from 'dayjs';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {heightPercentage, widthPercentage} from '../Responsive';
import {isDinnerSubmit2, isLunchSubmit2} from '../states';
import Btn from './Btn';
import DinnerForm from './DinnerForm';
import Footer from './Footer';
import LunchForm from './LunchForm';
import MealSatisfaction from './MealSatisfaction';
import MealTiltle from './MealTiltle';
import MenuList from './MenuList';

export default function Cafeteria({mealData, page, campus}) {
  let now = dayjs();
  let date = now.format('MM.DD');

  const LunchSubmit2 = useRecoilValue(isLunchSubmit2);
  const DinnerSubmit2 = useRecoilValue(isDinnerSubmit2);

  switch (page) {
    case 0:
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <MealTiltle type={'중식'} time={'11:30 - 13:30'} />
          <MenuList data={mealData.lunch10} />
          {date === mealData.date && !LunchSubmit2 ? (
            <LunchForm mealData={mealData.lunch10} title={'중식'} />
          ) : (
            <></>
          )}
          <MealTiltle type={'석식'} time={'17:30 - 18:30'} />
          <MenuList data={mealData.dinner10} />
          {date === mealData.date && !DinnerSubmit2 ? (
            <View>
              <MealSatisfaction message="오늘의 석식 만족하시나요?" />
              <View style={btn.component}>
                <Btn type="석식" btnName="네!" data={mealData.dinner10} />
                <Btn type="석식" btnName="아니요.." data={mealData.dinner10} />
              </View>
            </View>
          ) : (
            <></>
          )}
          <View style={{height: heightPercentage(60)}} />
          <Footer campus={campus} />
        </ScrollView>
      );
    case 1:
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <MealTiltle type={'중식'} time={'11:30 - 14:00'} />
          <MenuList data={mealData.lunch11} />
          {date === mealData.date && !LunchSubmit2 ? (
            <LunchForm mealData={mealData.lunch11} title={'중식'} />
          ) : (
            <></>
          )}
          <View style={{height: heightPercentage(60)}} />
        </ScrollView>
      );
    case 2:
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <MealTiltle type={'중식'} time={'11:30 - 13:30'} />
          <MenuList data={mealData.lunch12} />
          {date === mealData.date && !LunchSubmit2 ? (
            <LunchForm mealData={mealData.lunch12} title={'중식'} />
          ) : (
            <></>
          )}
          <MealTiltle type={'석식'} time={'17:00 - 18:30'} />
          <MenuList data={mealData.dinner12} />
          {date === mealData.date && !DinnerSubmit2 ? (
            <View>
              <MealSatisfaction message="오늘의 석식 만족하시나요?" />

              <View style={btn.component}>
                <Btn type="석식" btnName="네!" data={mealData.dinner12} />
                <Btn type="석식" btnName="아니요.." data={mealData.dinner12} />
              </View>
            </View>
          ) : (
            <></>
          )}
          <View style={{height: heightPercentage(60)}} />
        </ScrollView>
      );
  }
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
