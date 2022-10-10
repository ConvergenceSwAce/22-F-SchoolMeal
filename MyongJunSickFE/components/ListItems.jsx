import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const item = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'row', // 실제 디자인요소엔 없는데 있어야함
    justifyContent: 'space-between',
    marginVertical: 4,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: 16,
    textAlign: 'left',
    color: '#000000',
  },
  kcal: {
    flex: 1,
    // fontFamily: "NotoSansKR",
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
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
