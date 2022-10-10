import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const btn = StyleSheet.create({
  component: {
    // 박스를 감싸고 있는 컴포넌트
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 12,
  },
  isPress: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#071648',
  },
  default: {
    width: 160,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#a8a8a8',
  },
});

export default function Btn(props) {
  return (
    <View style={btn.default}>
      <Text style={btn.text}>{props.btnName}</Text>
    </View>
  );
}
