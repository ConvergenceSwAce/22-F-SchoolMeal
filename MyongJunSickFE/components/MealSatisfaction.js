import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

const mealSatisfaction = StyleSheet.create({
  component: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentage(24),
  },
  text: {
    flex: 1,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: fontPercentage(18),
    textAlign: 'center',
    color: '#000000',
  },
});

export default function MealSatisfaction(props) {
  return (
    <View style={mealSatisfaction.component}>
      <Text style={mealSatisfaction.text}>{props.message}</Text>
    </View>
  );
}
