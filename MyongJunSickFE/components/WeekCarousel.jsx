import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function WeekCarousel(props) {

  const mon_date = props.mon.split(".")[1];
  const tue_date = props.tue.split(".")[1];
  const wed_date = props.wed.split(".")[1];
  const thu_date = props.thu.split(".")[1];
  const fri_date = props.fri.split(".")[1];

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

    const onPress = () => {
      console.log('onPress');
      console.log(props);
      
    };

  return (
    <View style={carouselStyle}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={touchStyle} activeOpacity={0.5} onPress={onPress}>
            <Text style={dayStyle}>Mon</Text>
            <Text style={weekStyle}>{mon_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>Tue</Text>
        <Text style={weekStyle}>{tue_date}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>Wed</Text>
        <Text style={weekStyle}>{wed_date}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>Thu</Text>
        <Text style={weekStyle}>{thu_date}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>Fri</Text>
        <Text style={weekStyle}>{fri_date}</Text>
      </View>
    </View>
  );
}
