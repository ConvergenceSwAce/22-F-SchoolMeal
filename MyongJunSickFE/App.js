import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import Header from './components/Header';
import WeekCarousel from './components/WeekCarousel';
import MealTitle from './components/MealTiltle';
import MenuList from './components/MenuList';
import MealSatisfaction from './components/MealSatisfaction';
import Btn from './components/Btn';
import {heightPercentage} from './Responsive';
import Footer from './components/Footer';
import Loading from './components/Loading';

Config.API_URL;

const titleData = {
  title: 'MCC 학생식당',
  month: '10월',
  year: '2022',
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
  const [mon, setMon] = useState({day: '월', date: '...', lunch: [], dinner: []});
  const [tue, setTue] = useState({day: '화', date: '...', lunch: [], dinner: []});
  const [wed, setWed] = useState({day: '수', date: '...', lunch: [], dinner: []});
  const [thu, setThu] = useState({day: '목', date: '...', lunch: [], dinner: []});
  const [fri, setFri] = useState({day: '금', date: '...', lunch: [], dinner: []});

  const fetchData = async () => {
    setLoading(true);
    await axios.get(`${Config.API_URL}/info`).then(res => {
      setData(res.data);
      setLoading(false);
      console.log(data);
    });
    getDay();
  };

  const getDay = () => {
    data.map(item => {
      if (item.day === '월') {
        setMon(item);
      } else if (item.day === '화') {
        setTue(item);
      } else if (item.day === '수') {
        setWed(item);
      } else if (item.day === '목') {
        setThu(item);
      } else if (item.day === '금') {
        setFri(item);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header
        loading={loading}
        year={titleData.year}
        month={titleData.month}
        title={titleData.title}
      />
      <WeekCarousel mon={mon.date} tue={tue.date} wed={wed.date} thu={thu.date} fri={fri.date} />
      <MealTitle type={meal.lunch} time={meal.lunchTime} />
      {loading ? <Loading /> : <MenuList data={dummyData.lunch} />}
      <MealSatisfaction message="오늘의 중식 만족하시나요?" />
      <View style={btn.component}>
        <Btn type="중식" btnName="네!" data={dummyData.lunch} />
        <Btn type="중식" btnName="아니요.." data={dummyData.lunch} />
      </View>
      <MealTitle type={meal.dinner} time={meal.dinnerTime} />
      {loading ? <Loading /> : <MenuList data={dummyData.dinner} />}
      <MealSatisfaction message="오늘의 석식 만족하시나요?" />
      <View style={btn.component}>
        <Btn type="석식" btnName="네!" data={dummyData.dinner} />
        <Btn type="석식" btnName="아니요.." data={dummyData.dinner} />
      </View>
      <Footer />
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
