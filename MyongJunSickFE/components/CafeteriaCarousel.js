import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {fontPercentage, heightPercentage, widthPercentage} from '../Responsive';
import Cafeteria from './Cafeteria';

export default function CafeteriaCarousel(props) {
  console.log('cafeteriaCarousel :', props.mealData);
  const {width, height} = Dimensions.get('window');
  const [page, setPage] = useState(0); // 케러셀에서 포커스된 페이지 좌표
  const cafeteriasName = ['교직원 식당', '학관 식당', '생활관 식당'];
  const [name, setName] = useState('교직원식당');
  useEffect(() => {
    setName(cafeteriasName[page]);
  }, [page]);
  return (
    <>
      <Text
        style={{
          color: '#000000',
          textAlign: 'center',
          fontSize: fontPercentage(15),
          fontWeight: '600',
        }}
      >
        {name}
      </Text>
      <View style={styles.indicatorContainer}>
        <View style={page === 0 ? styles.indicatorOn : styles.indicatorOff}></View>
        <View style={page === 1 ? styles.indicatorOn : styles.indicatorOff}></View>
        <View style={page === 2 ? styles.indicatorOn : styles.indicatorOff}></View>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const newPage = Math.round(e.nativeEvent.contentOffset.x / width); //호라이즌 스크롤 값
          if (newPage === 0) {
            setPage(newPage);
            console.log('식당이름 :::::', name);
          } else if (newPage === 1) {
            setPage(newPage);
            console.log('식당이름 :::::', name);
          } else {
            setPage(newPage);
            console.log('식당이름 :::::', name);
          }

          console.log(page);
        }}
        scrollEventThrottle={1}
      >
        <Cafeteria mealData={props.mealData} page={page} />
        <Cafeteria mealData={props.mealData} page={page} />
        <Cafeteria mealData={props.mealData} page={page} />
      </ScrollView>
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
    height: 800,
  },
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
    marginHorizontal: widthPercentage(4),
    borderRadius: 4,
  },
  indicatorContainer: {
    marginTop: heightPercentage(15),
    marginBottom: heightPercentage(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
