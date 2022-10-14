import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function MealTiltle(props) {
const mealTitle = StyleSheet.create({
  component: {
    width: widthPercentage(396),
    height: heightPercentage(26),
    flex: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPercentage(30),
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

  return (
    <View style={mealTitle.component}>
      <Text style={mealTitle.title}>{props.type}</Text>
      <Text style={mealTitle.time}>{props.time}</Text>
    </View>
  );
}
