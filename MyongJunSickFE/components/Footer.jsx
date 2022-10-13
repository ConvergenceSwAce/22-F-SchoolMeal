import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function Footer() {
  const footerStyle = StyleSheet.create({
    marginTop: heightPercentage(40),
    paddingTop: heightPercentage(10),
    paddingBottom: heightPercentage(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#071648',
  });

  const footerText = StyleSheet.create({
    text: {
      paddingVertical: heightPercentage(10),
      paddingHorizontal: widthPercentage(30),
      flexGrow: 1,
      fontSize: fontPercentage(12),
      fontWeight: '200',
      fontStyle: 'normal',
      color: '#ffffff',
    },
  });

  return (
    <View style={footerStyle}>
      <TouchableOpacity activeOpacity={1}>
        <Text style={footerText.text}>MJU Convergence Software</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.3}>
        <Text style={footerText.text}>문의하기</Text>
      </TouchableOpacity>
    </View>
  );
}
