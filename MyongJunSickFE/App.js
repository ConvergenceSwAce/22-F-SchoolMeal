import {React, useState} from 'react';
import dayjs from 'dayjs';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import MealTitle from './components/MealTiltle';
import MenuList from './components/MenuList';
import Splash from './components/Splash';
import {RecoilRoot, useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {getDayByMeal, isLunchSubmit, isDinnerSubmit} from './states';
import LunchForm from './components/LunchForm';
import DinnerForm from './components/DinnerForm';

let now = dayjs();
let day = now.get('day');
let year = now.format('YYYY');
let month = now.format('MM');
let date = now.format('DD');

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

  const LunchSubmit = useRecoilValue(isLunchSubmit);
  const dinnerSumbit = useRecoilValue(isDinnerSubmit);

  switch (mealLoadable.state) {
    case 'hasValue':
      return (
        <ScrollView style={styles.container}>
          <Header year={year} month={month} />
          <WeekCarousel day={day} setMealData={setMealData} />
          <MealTitle type={mealTime.lunch} time={mealTime.lunchTime} />
          <MenuList data={mealData.lunch} />
          {date === mealData.date && !LunchSubmit ? <LunchForm mealData={mealData} /> : <></>}
          <MealTitle type={mealTime.dinner} time={mealTime.dinnerTime} />
          <MenuList data={mealData.dinner} />
          {date === mealData.date && !dinnerSumbit ? <DinnerForm mealData={mealData} /> : <></>}
        </ScrollView>
      );
    case 'loading':
      return (
        <View style={styles.splash}>
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
  },
  splash: {
    flex: 1,
    flexDirection: 'column',
  },
});
