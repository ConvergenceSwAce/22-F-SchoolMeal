import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import WeekCarousel from '../components/WeekCarousel';
import MealTitle from '../components/MealTiltle';
import MenuList from '../components/MenuList';
import MealSatisfaction from '../components/MealSatisfaction';
import Btn from '../components/Btn';
import {heightPercentage, widthPercentage} from '../Responsive';
import Footer from '../components/Footer';
import { useRecoilValueLoadable, } from 'recoil';
import { getDayByMeal, mon, tue, wed, thu, fri } from "../states";


const titleData = {
  title: 'MCC 학생식당',
  month: '10월',
  year: '2022',
};

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

const Main = () => {
  const meal = useRecoilValueLoadable(getDayByMeal);

  switch (meal.state) {
    case "hasValue":
  return (
    <ScrollView style={styles.container}>
      <Header year={titleData.year} month={titleData.month} title={titleData.title} />
      <WeekCarousel mon={mon.date} tue={tue.date} wed={wed.date} thu={thu.date} fri={fri.date} />
      <MealTitle type={meal.lunch} time={mealTime.lunchTime} />
      <MenuList data={dummyData.lunch} />
      <MealSatisfaction message="오늘의 중식 만족하시나요?" />
      <View style={btn.component}>
        <Btn type="중식" btnName="네!" data={dummyData.lunch} />
        <Btn type="중식" btnName="아니요.." data={dummyData.lunch} />
      </View>
      <MealTitle type={meal.dinner} time={mealTime.dinnerTime} />
      <MenuList data={dummyData.dinner} />
      <MealSatisfaction message="오늘의 석식 만족하시나요?" />
      <View style={btn.component}>
        <Btn type="석식" btnName="네!" data={dummyData.dinner} />
        <Btn type="석식" btnName="아니요.." data={dummyData.dinner} />
      </View>
      <Footer />
    </ScrollView>
  );
    case "loading":
      return (
    <ScrollView style={styles.container}>
      <Text>loading...</Text>
    </ScrollView>
      );
    case "hasError":
      return (
    <ScrollView style={styles.container}>
      <Text>error...</Text>
    </ScrollView>
      );
  }
};

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

export default Main;
