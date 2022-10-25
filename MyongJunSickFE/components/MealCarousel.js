import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentage, widthPercentage} from '../Responsive';
import LunchForm from './LunchForm';
import MenuList from './MenuList';

const dummy = [
  {
    date: '10.17',
    day: '월',
    lunchA: ['베이컨김치볶음밥', '맑은우동국물', '피쉬앤칩스&케찹', '단무지', '배추김치'],
    lunchB: [
      '모짜렐라치즈 돈가츠',
      '맑은우동국물',
      '추가밥',
      '스위트콘&그린샐러드',
      '오이피클',
      '배추김치',
    ],
    dinner: [
      '해물볶음우동',
      '말은우동국물',
      '추가밥',
      '모둠튀김(고구마/단호박/김말이)',
      '단무지',
      '배추김치',
    ],
  },
];

export default function MealCarousel() {
  const scrollX = useRef(new Animated.Value(0)).current;
  // const [data, setData] = useState([]);
  const [page, setPage] = useState(0); // 케러셀에서 포커스된 페이지 인덱스
  const [lunch, setLunch] = useState('lunchA');
  console.log('test', `dummy[0].${lunch}`);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const newPage = Math.round(e.nativeEvent.contentOffset.x); //호라이즌 스크롤 값
              if (newPage >= 0) {
                setPage(newPage);
                if (newPage === 0) {
                  setLunch('lunchA');
                } else {
                  setLunch('lunchB');
                }
              }
              console.log(page);
            }}
            scrollEventThrottle={1}
          >
            <MenuList data={dummy[0].lunchA} />
            <MenuList data={dummy[0].lunchB} />
          </ScrollView>
          <View style={styles.indicatorContainer}>
            <View style={page === 0 ? styles.indicatorOn : styles.indicatorOff}></View>
            <View style={page === 0 ? styles.indicatorOff : styles.indicatorOn}></View>
          </View>
        </View>
      </SafeAreaView>
      <LunchForm mealData={lunch === 'lunchA' ? dummy[0].lunchA : dummy[0].lunchB} title={'중식'} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorOn: {
    height: 8,
    width: 35,
    backgroundColor: '#071648',
    marginHorizontal: 4,
  },
  indicatorOff: {
    height: 8,
    width: 35,
    backgroundColor: '#dfdfdf',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
