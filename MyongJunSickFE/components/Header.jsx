import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Header() {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, marginTop: 54}}>
      <Image
        style={{width: 32, height: 32, marginTop: 12}}
        source={require('../assets/CalendarIcon.png')} //require 말곤없나?
      />
      <Text
        style={{
          width: 68,
          height: 41,
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#071648',
          marginLeft: 10,
          marginTop: 12,
        }}
      >
        June
      </Text>
      <Text
        style={{
          width: 37,
          height: 23,
          fontSize: 16,
          fontWeight: '500',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#a8a8a8',
          marginLeft: 10,
          marginTop: 20,
        }}
      >
        2022
      </Text>
    </View>
  );
}
