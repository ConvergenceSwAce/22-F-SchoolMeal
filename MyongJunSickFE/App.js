import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import MealTitle from './components/MealTiltle';
import MenuList from './components/MenuList';
import MealSatisfaction from './components/MealSatisfaction';
import Btn from './components/Btn';
import {heightPercentage} from './Responsive';

Config.API_URL;

const titleData = {
  title: '인문캠퍼스 MCC 식당',
};

const meal = {
  lunch: '오늘의 중식',
  lunchTime: '11:30 - 14:00',
  dinner: '오늘의 석식',
  dinnerTime: '17:30 - 19:00',
};

const dummyData = {
  lunch: ['꼬치어묵우동', '후리가케밥', '가라아게&갈릭마요소스', '단무지', '배추김치'],
  dinner: ['일본식 카레라이스', '우동국물', '왕새우튀김', '오이지무침', '배추김치'],
};

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // const result = await axios.get(`${Config.API_URL}/info`);
      setData(result.data);
      console.log(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <WeekCarousel />
      <MealTitle type={meal.lunch} time={meal.lunchTime} />
      <MenuList data={dummyData.lunch} />
      <MealSatisfaction message="오늘의 중식 만족하시나요?" />
      <View style={btn.component}>
        <Btn btnName="Good" data={dummyData.lunch} />
        <Btn btnName="Bad" data={dummyData.lunch} />
      </View>
      <MealTitle type={meal.dinner} time={meal.dinnerTime} />
      <MenuList data={dummyData.dinner} />
      <MealSatisfaction message="오늘의 석식 만족하시나요?" />
      <View style={btn.component}>
        <Btn btnName="Good" data={dummyData.dinner} />
        <Btn btnName="Bad" data={dummyData.dinner} />
      </View>
    </ScrollView>
  );
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
    marginHorizontal: heightPercentage(12),
    marginTop: heightPercentage(16),
  },
});

export default App;
