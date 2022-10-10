import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function Header() {
  const headerStyle = StyleSheet.create({
    flexDirection: 'row',
    marginLeft: widthPercentage(16),
    marginTop: heightPercentage(54),
    justifyContent: 'flex-start',
    alignItems: 'center',
  });
  return (
    <View style={headerStyle}>
      <Image
        style={{width: widthPercentage(32), height: heightPercentage(32), objectFit: 'contain'}}
        source={require('../assets/CalendarIcon.png')}
      />
      <Text
        style={{
          fontSize: fontPercentage(28),
          fontWeight: 'bold',
          fontStyle: 'normal',
          color: '#071648',
          marginLeft: widthPercentage(10),
        }}
      >
        June
      </Text>
      <Text
        style={{
          fontSize: fontPercentage(16),
          fontWeight: '500',
          fontStyle: 'normal',
          letterSpacing: 0,
          color: '#a8a8a8',
          marginLeft: widthPercentage(10),
        }}
      >
        2022
      </Text>
    </View>
  );
}
