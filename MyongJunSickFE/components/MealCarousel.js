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

export default function MealCarousel({data}) {
  // const [data, setData] = useState([]);
  const [page, setPage] = useState(0); // 케러셀에서 포커스된 페이지 인덱스
  const [lunch, setLunch] = useState('lunchA');
  return (
    <>
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
        <MenuList data={data.lunchA} />
        <MenuList data={data.lunchB} />
      </ScrollView>
      <View style={styles.indicatorContainer}>
        <View style={page === 0 ? styles.indicatorOn : styles.indicatorOff}></View>
        <View style={page === 0 ? styles.indicatorOff : styles.indicatorOn}></View>
      </View>
      <LunchForm mealData={lunch === 'lunchA' ? data.lunchA : data.lunchB} title={'중식'} />
    </>
  );
}

const styles = StyleSheet.create({
  indicatorOn: {
    height: 8,
    width: 35,
    backgroundColor: '#071648',
    marginHorizontal: 4,
    borderRadius: 4,
  },
  indicatorOff: {
    height: 8,
    width: 35,
    backgroundColor: '#dfdfdf',
    marginHorizontal: 4,
    borderRadius: 4,
  },
  indicatorContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
