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

Config.API_URL;
const App = () => {
  const {width: SCREEN_WIDTH} = Dimensions.get('window');

  const onPress = () => {
    console.log('onPress');
  };

  const Header = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, marginTop: 54}}>
        <Image
          style={{width: 32, height: 32, marginTop: 12}}
          source={require('./assets/CalendarIcon.png')}
        />
        <Text
          style={{
            width: 68,
            height: 41,
            fontSize: 28,
            fontWeight: 'bold',
            fontStyle: 'normal',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#071648',
            marginLeft: 10,
            marginTop: 12,
          }}
        >
          June
        </Text>
        <Text
          style={{
            width: 37,
            height: 23,
            fontSize: 16,
            fontWeight: '500',
            fontStyle: 'normal',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#a8a8a8',
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          2022
        </Text>
      </View>
    );
  };

  const WeekCarousel = () => {
    return (
      <View style={{flex: 10, flexDirection: 'row', marginHorizontal: 44, marginTop: 20}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View
              style={{
                width: 44,
                height: 64,
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

const dayStyle = StyleSheet.create({
  fontSize: 16,
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#d9d9d9',
  textAlign: 'center',
  marginTop: 7,
});

const weekStyle = StyleSheet.create({
  marginTop: 10,
  fontSize: 18,
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#7b7b7b',
  textAlign: 'center',
});

const mealTitle = StyleSheet.create({
  component: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: 87,
    height: 26,
    // fontFamily: 'NotoSansKR',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
    marginLeft: 16,
    marginTop: 42,
  },
  time: {
    width: 84,
    height: 20,
    // fontFamily: 'NotoSansKR',
    fontSize: 13,
    color: '#7b7b7b',
    marginTop: 42,
    marginRight: 16,
  },
});

const menuComponent = {
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: 16,
  backgroundColor: '#ffffff',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#dbdbdb',
  marginHorizontal: 16,
  marginTop: 12,
  paddingVertical: 8,
};

const item = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'row', // 실제 디자인요소엔 없는데 있어야함
    justifyContent: 'space-between',
    marginVertical: 4,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: 16,
    textAlign: 'left',
    color: '#000000',
  },
  kcal: {
    flex: 1,
    // fontFamily: "NotoSansKR",
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#a8a8a8',
  },
});

const mealSatisfaction = StyleSheet.create({
  component: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  text: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
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
    margin: 12,
  },
  isPress: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#071648',
  },
  default: {
    width: 160,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#a8a8a8',
  },
});
export default App;
