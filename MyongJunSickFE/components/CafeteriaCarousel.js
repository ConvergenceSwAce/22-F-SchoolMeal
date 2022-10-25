import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Cafeteria from './Cafeteria';

export default function CafeteriaCarousel(props) {
  console.log('cafeteriaCarousel :', props.mealData);
  const {width, height} = Dimensions.get('window');
  const [page, setPage] = useState(0); // 케러셀에서 포커스된 페이지 좌표
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const newPage = Math.round(e.nativeEvent.contentOffset.x / width); //호라이즌 스크롤 값
              if (newPage === 0) {
                setPage(newPage);
              } else if (newPage === 1) {
                setPage(newPage);
              } else {
                setPage(newPage);
              }

              console.log(page);
            }}
            scrollEventThrottle={1}
          >
            <Cafeteria mealData={props.mealData} page={page} />
            <Cafeteria mealData={props.mealData} page={page} />
            <Cafeteria mealData={props.mealData} page={page} />
          </ScrollView>
          <View style={styles.indicatorContainer}>
            <View style={page === 0 ? styles.indicatorOn : styles.indicatorOff}></View>
            <View style={page === 1 ? styles.indicatorOn : styles.indicatorOff}></View>
            <View style={page === 2 ? styles.indicatorOn : styles.indicatorOff}></View>
          </View>
        </View>
      </SafeAreaView>
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
