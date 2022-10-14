import React from 'react';
import dayjs from 'dayjs';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import MealTitle from './components/MealTiltle';
import MenuList from './components/MenuList';
import MealSatisfaction from './components/MealSatisfaction';
import Btn from './components/Btn';
import {heightPercentage, widthPercentage} from './Responsive';
import Footer from './components/Footer';
import {RecoilRoot, useRecoilState, useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {monData, thuData, tueData, wedData, friData, getDayByMeal} from './states';

let now = dayjs();
let year = now.format('YYYY');
let month = now.format('MM');

const mealTime = {
  lunch: '오늘의 중식',
  lunchTime: '11:30 - 14:00',
  dinner: '오늘의 석식',
  dinnerTime: '17:30 - 19:00',
};

const dummyData = {
  lunch: ['꼬치어묵우동', '후리가케밥', '가라아게&갈릭마요소스', '단무지', '배추김치'],
  dinner: ['일본식 카레라이스', '우동국물', '왕새우튀김', '오이지무침', '배추김치'],
};

export const MainView = () => {
  // API에서 데이터를 가져온다.
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);

  switch (mealLoadable.state) {
    case 'hasValue':
      return (
        <ScrollView style={styles.container}>
          <Header year={year} month={month} />
          <WeekCarousel />
          <MealTitle type={mealTime.lunch} time={mealTime.lunchTime} />
          <MenuList data={dummyData.lunch} />
          <MealSatisfaction message="오늘의 중식 만족하시나요?" />
          <View style={btn.component}>
            <Btn type="중식" btnName="네!" data={dummyData.lunch} />
            <Btn type="중식" btnName="아니요.." data={dummyData.lunch} />
          </View>
          <MealTitle type={mealTime.dinner} time={mealTime.dinnerTime} />
          <MenuList data={dummyData.dinner} />
          <MealSatisfaction message="오늘의 석식 만족하시나요?" />
          <View style={btn.component}>
            <Btn type="석식" btnName="네!" data={dummyData.dinner} />
            <Btn type="석식" btnName="아니요.." data={dummyData.dinner} />
          </View>
          <Footer />
        </ScrollView>
      );
    case 'loading':
      return (
        <ScrollView style={styles.container}>
          <Text style={{textAlign: 'center', alignItems: 'center'}}>loading...</Text>
        </ScrollView>
      );
  }
};

export default function App() {
  return (
    <RecoilRoot>
      <MainView />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#fff',
  },
});

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
