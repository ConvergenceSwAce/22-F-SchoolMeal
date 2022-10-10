import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import {widthPercentage, heightPercentage, fontPercentage} from './Responsive';

Config.API_URL;
const App = () => {
  const WINDOW_WIDHT = Dimensions.get('window').width;
  const WINDOW_HEIGHT = Dimensions.get('window').height;

  const onPress = () => {
    console.log('onPress');
  };

  const Header = () => {
    return (
      <View style={headerStyle}>
        <Image
          style={{width: widthPercentage(32), height: heightPercentage(32), objectFit: 'contain'}}
          source={require('./assets/CalendarIcon.png')}
        />
        <Text
          style={{
            fontSize: fontPercentage(28),
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#071648',
            marginLeft: widthPercentage(10),
          }}
        >
          June
        </Text>
        <Text
          style={{
            fontSize: fontPercentage(16),
            fontWeight: '500',
            fontStyle: 'normal',
            letterSpacing: 0,
            color: '#a8a8a8',
            marginLeft: widthPercentage(10),
          }}
        >
          2022
        </Text>
      </View>
    );
  };

  const WeekCarousel = () => {
    return (
      <View style={carouselStyle}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View
              style={{
                width: widthPercentage(44),
                height: widthPercentage(64),
                borderRadius: 8,
                backgroundColor: '#071648',
                alignItems: 'center',
              }}
            >
              <Text style={dayStyle}>S</Text>
              <Text style={weekStyle}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={dayStyle}>M</Text>
          <Text style={weekStyle}>2</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={dayStyle}>T</Text>
          <Text style={weekStyle}>3</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={dayStyle}>W</Text>
          <Text style={weekStyle}>4</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={dayStyle}>T</Text>
          <Text style={weekStyle}>5</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={dayStyle}>F</Text>
          <Text style={weekStyle}>6</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={dayStyle}>S</Text>
          <Text style={weekStyle}>7</Text>
        </View>
      </View>
    );
  };

  const meal = {
    lunch: '오늘의 중식',
    lunchTime: '11:30 - 14:00',
    dinner: '오늘의 석식',
    dinnerTime: '17:30 - 19:00',
  };

  const MealTitle = props => {
    return (
      <View style={mealTitle.component}>
        <Text style={mealTitle.title}>{props.type}</Text>
        <Text style={mealTitle.time}>{props.time}</Text>
      </View>
    );
  };

  const dummyData = {
    lunch: ['꼬치어묵우동', '후리가케밥', '가라아게&갈릭마요소스', '단무지', '배추김치'],
    dinner: ['일본식 카레라이스', '우동국물', '왕새우튀김', '오이지무침', '배추김치'],
  };

  const MenuList = props => {
    const data = props.data; //lunch or dinner
    return (
      <View style={menuComponent}>
        {data.map(menu => (
          <ListItems key={menu} menu={menu} />
        ))}
      </View>
    );
  };

  const ListItems = props => {
    return (
      <View style={item.component}>
        <Text style={item.title}>{props.menu}</Text>
        <Text style={item.kcal}>칼로리가 없네?</Text>
      </View>
    );
  };

  const Btn = props => {
    return (
      <View style={btn.default}>
        <Text style={btn.text}>{props.btnName}</Text>
      </View>
    );
  };

  const MealSatisfaction = props => {
    return (
      <View style={mealSatisfaction.component}>
        <Text style={mealSatisfaction.text}>{props.message}</Text>
      </View>
    );
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(`${Config.API_URL}/info`);
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
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Btn btnName="Good" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Btn btnName="Bad" />
        </TouchableOpacity>
      </View>
      <MealTitle type={meal.dinner} time={meal.dinnerTime} />
      <MenuList data={dummyData.dinner} />
      <MealSatisfaction message="오늘의 석식 만족하시나요?" />
      <View style={btn.component}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Btn btnName="Good" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Btn btnName="Bad" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const headerStyle = StyleSheet.create({
  flexDirection: 'row',
  marginLeft: widthPercentage(16),
  marginTop: heightPercentage(54),
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const carouselStyle = StyleSheet.create({
  flex: 10,
  flexDirection: 'row',
  marginHorizontal: widthPercentage(30),
  marginTop: heightPercentage(30),
  justifyContent: 'space-between',
  alignItems: 'center',
});

const dayStyle = StyleSheet.create({
  fontSize: fontPercentage(16),
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#d9d9d9',
  textAlign: 'center',
  marginTop: heightPercentage(7),
});

const weekStyle = StyleSheet.create({
  marginTop: heightPercentage(5),
  fontSize: fontPercentage(18),
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#7b7b7b',
  textAlign: 'center',
});

const mealTitle = StyleSheet.create({
  component: {
    width: widthPercentage(396),
    height: heightPercentage(26),
    flex: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPercentage(40),
    marginLeft: widthPercentage(16),
  },
  title: {
    fontSize: fontPercentage(18),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#000000',
  },
  time: {
    fontSize: fontPercentage(13),
    color: '#7b7b7b',
  },
});

const menuComponent = {
  width: widthPercentage(396),
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 16,
  backgroundColor: '#ffffff',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#dbdbdb',
  marginHorizontal: widthPercentage(16),
  marginTop: heightPercentage(14),
  paddingVertical: heightPercentage(12),
};

const item = StyleSheet.create({
  component: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: widthPercentage(16),
    marginVertical: heightPercentage(8),
  },
  title: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
  },
  kcal: {
    flex: 1,
    // fontFamily: "NotoSansKR",
    fontSize: fontPercentage(12),
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'right',
    color: '#a8a8a8',
  },
});

const mealSatisfaction = StyleSheet.create({
  component: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentage(24),
  },
  text: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: fontPercentage(18),
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000000',
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
  isPress: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#071648',
  },
  default: {
    width: widthPercentage(190),
    height: heightPercentage(50),
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontPercentage(16),
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#a8a8a8',
  },
});
export default App;
