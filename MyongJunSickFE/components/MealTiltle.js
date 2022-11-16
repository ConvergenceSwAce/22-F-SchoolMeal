import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function MealTiltle(props) {
  const mealTitle = StyleSheet.create({
    component: {
      flex: 10,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: heightPercentage(30),
      marginHorizontal: widthPercentage(20),
    },
    title: {
      fontSize: fontPercentage(18),
      fontFamily: 'NotoSansKR-Medium',
      color: '#000000',
    },
    time: {
      fontSize: fontPercentage(13),
      fontFamily: 'NotoSansKR-Regular',
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
