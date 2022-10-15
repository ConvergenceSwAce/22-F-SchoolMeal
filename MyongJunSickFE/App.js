import {React, useState} from 'react';
import dayjs from 'dayjs';
import {ScrollView, View, StyleSheet, Text, StatusBar} from 'react-native';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import MealTitle from './components/MealTiltle';
import MenuList from './components/MenuList';
import MealSatisfaction from './components/MealSatisfaction';
import Btn from './components/Btn';
import {heightPercentage, widthPercentage} from './Responsive';
import Footer from './components/Footer';
import Splash from './components/Splash';
import {RecoilRoot, useRecoilValueLoadable} from 'recoil';
import {getDayByMeal} from './states';

let now = dayjs();
let day = now.get('day');
let year = now.format('YYYY');
let month = now.format('MM');

const mealTime = {
  lunch: '오늘의 중식',
  lunchTime: '11:30 - 14:00',
  dinner: '오늘의 석식',
  dinnerTime: '17:30 - 19:00',
};

export const MainView = () => {
  // API에서 데이터를 가져온다.
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);

  const [mealData, setMealData] = useState({});

  switch (mealLoadable.state) {
    case 'hasValue':
      return (
        <ScrollView style={styles.container}>
          <Header year={year} month={month} />
          <WeekCarousel day={day} setMealData={setMealData} />
          <MealTitle type={mealTime.lunch} time={mealTime.lunchTime} />
          <MenuList data={mealData.lunch} />
          <MealSatisfaction message="오늘의 중식 만족하시나요?" />
          <View style={btn.component}>
            <Btn type="중식" btnName="네!" data={mealData.lunch} />
            <Btn type="중식" btnName="아니요.." data={mealData.lunch} />
          </View>
          <MealTitle type={mealTime.dinner} time={mealTime.dinnerTime} />
          <MenuList data={mealData.dinner} />
          <MealSatisfaction message="오늘의 석식 만족하시나요?" />
          <View style={btn.component}>
            <Btn type="석식" btnName="네!" data={mealData.dinner} />
            <Btn type="석식" btnName="아니요.." data={mealData.dinner} />
          </View>
        </ScrollView>
      );
    case 'loading':
      return (
        <View style={styles.container}>
          <Splash />
        </View>
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
    marginBottom: heightPercentage(50),
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
