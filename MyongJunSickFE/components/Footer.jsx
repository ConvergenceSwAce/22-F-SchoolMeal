import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function Footer() {
  const footerStyle = StyleSheet.create({
    marginVertical: heightPercentage(30),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const footerText = StyleSheet.create({
    component: {
      flex: 1,
      width: widthPercentage(218),
      height: heightPercentage(43),
      flexDirection: 'row',
    },
    text: {
      flexGrow: 1,
      fontSize: fontPercentage(12),
      fontWeight: '100',
      fontStyle: 'normal',
    },
  });

  return (
    <View style={footerStyle}>
      <TouchableOpacity activeOpacity={0.3}>
        <Text style={footerText.text}>@Copyright Convergence Software</Text>
      </TouchableOpacity>
    </View>
  );
}
