import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

const item = StyleSheet.create({
  component: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: widthPercentage(16),
    marginVertical: heightPercentage(8),
  },
  title: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
  },
  kcal: {
    flex: 1,
    // fontFamily: "NotoSansKR",
    fontSize: fontPercentage(12),
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'right',
    color: '#a8a8a8',
  },
});

export default function ListItems(props) {
  return (
    <View style={item.component}>
      <Text style={item.title}>{props.menu}</Text>
      <Text style={item.kcal}>칼로리가 없네?</Text>
    </View>
  );
}
