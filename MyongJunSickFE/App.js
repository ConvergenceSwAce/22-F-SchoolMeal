import {React, Suspense, useState} from 'react';
import dayjs from 'dayjs';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import MealTitle from './components/MealTiltle';
import MenuList from './components/MenuList';
import Splash from './components/Splash';
import {RecoilRoot, useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {
  getDayByMeal,
  isLunchSubmit,
  isDinnerSubmit,
  restInfo,
  getDayByMeal2,
  isLunchSubmit2,
  isDinnerSubmit2,
} from './states';
import LunchForm from './components/LunchForm';
import DinnerForm from './components/DinnerForm';
import {heightPercentage} from './Responsive';

let now = dayjs();
let day = now.get('day');
let year = now.format('YYYY');
let month = now.format('MM');
let date = now.format('MM.DD');

const mealTime = {
  lunchA: '오늘의 중식A',
  lunchB: '오늘의 중식B',
  lunchTime: '11:30 - 14:00',
  dinner: '오늘의 석식',
  dinnerTime: '17:30 - 19:00',
};

const mealTime2 = {
  lunch: '오늘의 중식',
  lunchTime: '11:30 - 13:30',
  dinner: '오늘의 석식',
  dinnerTime: '17:30 - 18:30',
};

export const MainView = () => {
  const restSelect = useRecoilValue(restInfo);

  // API에서 데이터를 가져온다.
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);
  const mealLoadable2 = useRecoilValueLoadable(getDayByMeal2);

  const [mealData, setMealData] = useState({});
  const [mealData2, setMealData2] = useState({});

  const LunchSubmit = useRecoilValue(isLunchSubmit);
  const LunchSubmit2 = useRecoilValue(isLunchSubmit2);

  const dinnerSumbit = useRecoilValue(isDinnerSubmit);
  const dinnerSumbit2 = useRecoilValue(isDinnerSubmit2);

  switch (mealLoadable.state && mealLoadable2.state) {
    case 'hasValue':
      return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <StatusBar barStyle="dark-content" />
          <Header year={year} month={month} />
          <WeekCarousel day={day} setMealData={setMealData} setMealData2={setMealData2} />
          {restSelect === '인문캠퍼스' ? (
            <MealTitle type={mealTime.lunchA} time={mealTime.lunchTime} />
          ) : (
            <MealTitle type={mealTime2.lunch} time={mealTime2.lunchTime} />
          )}
          {restSelect === '인문캠퍼스' ? (
            <MenuList data={mealData.lunchA} />
          ) : (
            <MenuList data={mealData2.lunchA} />
          )}
          {restSelect === '인문캠퍼스' ? (
            date === mealData.date && !LunchSubmit ? (
              <LunchForm mealData={mealData.lunchA} title="오늘의 중식A 만족하셨나요?" />
            ) : (
              <></>
            )
          ) : date === mealData2.date && !LunchSubmit2 ? (
            <LunchForm mealData={mealData2.lunchA} title="오늘의 중식 만족하셨나요?" />
          ) : (
            <></>
          )}

          {restSelect === '인문캠퍼스' ? (
            <MealTitle type={mealTime.lunchB} time={mealTime.lunchTime} />
          ) : (
            <></>
          )}
          {restSelect === '인문캠퍼스' ? <MenuList data={mealData.lunchB} /> : <></>}
          {restSelect === '인문캠퍼스' ? (
            date === mealData.date && !LunchSubmit ? (
              <LunchForm mealData={mealData.lunchB} title="오늘의 중식B 만족하셨나요?" />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          {restSelect === '인문캠퍼스' ? (
            <MealTitle type={mealTime.dinner} time={mealTime.dinnerTime} />
          ) : (
            <MealTitle type={mealTime2.dinner} time={mealTime2.dinnerTime} />
          )}
          {restSelect === '인문캠퍼스' ? (
            <MenuList data={mealData.dinner} />
          ) : (
            <MenuList data={mealData2.dinner} />
          )}
          {restSelect === '인문캠퍼스' ? (
            date === mealData.date && !dinnerSumbit ? (
              <DinnerForm mealData={mealData} />
            ) : (
              <></>
            )
          ) : date === mealData2.date && !dinnerSumbit2 ? (
            <DinnerForm mealData={mealData2} />
          ) : (
            <></>
          )}

          <View style={{height: heightPercentage(50)}} />
        </ScrollView>
      );
    case 'loading':
      return (
        <View style={styles.splash}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Splash />
        </View>
      );
    case 'hasError':
      throw userNameLoadable.contents;
  }
};

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Splash />}>
        <MainView />
      </Suspense>
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
