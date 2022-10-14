import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRecoilValue} from 'recoil';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import {monData, tueData, wedData, thuData, friData, splitMealData} from '../states';

export default function WeekCarousel() {
  splitMealData();
  const mon = useRecoilValue(monData);
  const tue = useRecoilValue(tueData);
  const wed = useRecoilValue(wedData);
  const thu = useRecoilValue(thuData);
  const fri = useRecoilValue(friData);

  let mon_date = mon.date.split('.')[1];
  let tue_date = tue.date.split('.')[1];
  let wed_date = wed.date.split('.')[1];
  let thu_date = thu.date.split('.')[1];
  let fri_date = fri.date.split('.')[1];

  const carouselStyle = StyleSheet.create({
    flex: 10,
    flexDirection: 'row',
    marginHorizontal: widthPercentage(50),
    marginTop: heightPercentage(20),
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
    marginVertical: heightPercentage(5),
    fontSize: fontPercentage(18),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7b7b7b',
    textAlign: 'center',
  });

  const touchStyle = StyleSheet.create({
    borderRadius: 20,
    paddingVertical: heightPercentage(5),
    backgroundColor: '#071648',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const defaultTouchStyle = StyleSheet.create({
    borderRadius: 20,
    paddingVertical: heightPercentage(5),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const monPress = () => {
    console.log('onPress');
  };

  const tuePress = () => {
    console.log('onPress');
  };

  const wedPress = () => {
    console.log('onPress');
  };

  const thuPress = () => {
    console.log('onPress');
  };

  const friPress = () => {
    console.log('onPress');
  };

  return (
    <View style={carouselStyle}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={touchStyle} activeOpacity={0.5} onPress={monPress}>
          <Text style={dayStyle}>Mon</Text>
          <Text style={weekStyle}>{mon_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={defaultTouchStyle} activeOpacity={0.5} onPress={tuePress}>
          <Text style={dayStyle}>Tue</Text>
          <Text style={weekStyle}>{tue_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={defaultTouchStyle} activeOpacity={0.5} onPress={wedPress}>
          <Text style={dayStyle}>Wed</Text>
          <Text style={weekStyle}>{wed_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={defaultTouchStyle} activeOpacity={0.5} onPress={thuPress}>
          <Text style={dayStyle}>Thu</Text>
          <Text style={weekStyle}>{thu_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={defaultTouchStyle} activeOpacity={0.5} onPress={friPress}>
          <Text style={dayStyle}>Fri</Text>
          <Text style={weekStyle}>{fri_date}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
