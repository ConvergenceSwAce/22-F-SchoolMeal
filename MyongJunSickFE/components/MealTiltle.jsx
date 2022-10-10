import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MealTiltle(props) {
  const mealTitle = StyleSheet.create({
    component: {
      flex: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      width: 87,
      height: 26,
      // fontFamily: 'NotoSansKR',
      fontSize: 18,
      fontWeight: '500',
      fontStyle: 'normal',
      letterSpacing: 0,
      color: '#000000',
      marginLeft: 16,
      marginTop: 42,
    },
    time: {
      width: 84,
      height: 20,
      // fontFamily: 'NotoSansKR',
      fontSize: 13,
      color: '#7b7b7b',
      marginTop: 42,
      marginRight: 16,
    },
  });

  return (
    <View style={mealTitle.component}>
      <Text style={mealTitle.title}>{props.type}</Text>
      <Text style={mealTitle.time}>{props.time}</Text>
    </View>
  );
}
