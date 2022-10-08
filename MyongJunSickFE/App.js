import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet, Image, Text, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginLeft: '3.5%', bottom: 0, marginTop: '3.2%'}}>
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
          marginLeft: '3.2%',
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
          marginLeft: '3.2%',
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
    <View style={{flex: 10, flexDirection: 'row', marginLeft: '10%', marginTop: '15%'}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>S</Text>
        <Text style={weekStyle}>1</Text>
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
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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

const MealSatisfaction = () => {
  return (
    <View style={mealSatisfaction.component}>
      <Text style={mealSatisfaction.text}>오늘의 중식 만족하시나요</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <WeekCarousel />
      <MealTitle type={meal.lunch} time={meal.lunchTime} />
      <MenuList data={dummyData.lunch} />
      <MealSatisfaction />
      <View style={btn.component}>
        <Btn btnName="Good" />
        <Btn btnName="Bad" />
      </View>
      <MealTitle type={meal.dinner} time={meal.dinnerTime} />
      <MenuList data={dummyData.dinner} />
    </SafeAreaView>
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
});

const weekStyle = StyleSheet.create({
  marginTop: 10,
  fontSize: 18,
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#7b7b7b',
});

const mealTitle = StyleSheet.create({
  title: {
    width: 87,
    height: 26,
    // fontFamily: 'NotoSansKR',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 16,
  },
  time: {
    width: 84,
    height: 20,
    // fontFamily: 'NotoSansKR',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#7b7b7b',
  },
});

const menuComponent = {
  width: 396,
  height: 179,
  borderRadius: 16,
  backgroundColor: '#ffffff',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#dbdbdb',
  marginLeft: '3.7%',
  marginRight: '3.7%',
};

const item = StyleSheet.create({
  component: {
    width: 368,
    height: 23,
    flexDirection: 'row', // 실제 디자인요소엔 없는데 있어야함
    justifyContent: 'space-between', // 실제 디자인요소엔 없는데 있어야함
  },
  title: {
    width: 107,
    height: 23,
    // fontFamily: 'NotoSansKR',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 14,
    marginTop: 8,
  },
  kcal: {
    width: 46,
    height: 17,
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    width: 200,
    height: 26,
    // fontFamily: 'NotoSansKR',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
});

const btn = StyleSheet.create({
  component: {
    //박스를 감싸고 있는 컴포넌트
    width: 396,
    height: 47,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // flex: ,
  },
  isPress: {
    width: 180,
    height: 47,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#071648',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  default: {
    width: 180,
    height: 47,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  text: {
    width: 41,
    height: 23,
    // fontFamily: 'NotoSansKR',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#a8a8a8',
    marginLeft: 60,
  },
});
export default App;
