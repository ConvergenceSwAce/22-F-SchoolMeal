import {React, Suspense, useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {View, StyleSheet, StatusBar} from 'react-native';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import Splash from './components/Splash';
import {RecoilRoot, useRecoilState, useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {getDayByMeal, restInfo, getDayByMeal2, campusInfo} from './states';
import codePush from 'react-native-code-push';
import SeoulCamView from './pages/SeoulCamView';
import YonginCamView from './pages/YonginCamView';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';

let now = dayjs();
let day = now.get('day');
let year = now.format('YYYY');
let month = now.format('MM');

function Main() {
  const [campus, setCampus] = useRecoilState(campusInfo); // 캠퍼스 설정
  useEffect(() => {
    get();
    axios
      .post('#')
      .then(res => {
        console.log(res);
      })
      .catch(() => {
        console.log("#");
      });
  }, []);
  const key = 'campus';
  const get = async () => {
    const rawData = await AsyncStorage.getItem(key)
      .then(value => {
        console.log(value);
        setCampus(value); // AsyncStorage에서 데이터를 가져와서 selectData에 저장한다. (selectData는 캠퍼스 설정에 사용된다.)
        return rawData;
      })
      .catch(err => {
        console.log(err);
      }); // AsyncStorage에서 데이터를 가져온다. (Promise 객체를 반환한다.)
  };

  const restSelect = useRecoilValue(restInfo);

  // API에서 데이터를 가져온다.
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);
  const mealLoadable2 = useRecoilValueLoadable(getDayByMeal2);

  const [mealData, setMealData] = useState({});
  const [mealData2, setMealData2] = useState({});

  switch (mealLoadable.state && mealLoadable2.state) {
    case 'hasValue':
      return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Header year={year} month={month} campus={campus} />
          <WeekCarousel day={day} setMealData={setMealData} setMealData2={setMealData2} />
          {restSelect === '인문캠퍼스' ? (
            <SeoulCamView mealData={mealData} />
          ) : (
            <YonginCamView mealData={mealData2} />
          )}
        </View>
      );
    case 'loading':
      return (
        <View style={styles.splash}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Splash />
        </View>
      );
    case 'hasError':
      return (
        <View style={styles.splash}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Splash />
        </View>
      );
  }
}
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <RecoilRoot>
      <Suspense fallback={<Splash />}>
        <Main />
      </Suspense>
    </RecoilRoot>
  );
}
export default codePush(App);

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
