import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import SettingModal from './SettingModal';

export default function Footer({campus}) {
  const footerStyle = StyleSheet.create({
    flexGrow: 1,
    paddingVertical: heightPercentage(5),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#071648',
    bottom: 0,
  });

  const footerText = StyleSheet.create({
    text: {
      paddingVertical: heightPercentage(10),
      paddingHorizontal: widthPercentage(30),
      flexGrow: 1,
      fontSize: fontPercentage(12),
      fontFamily: 'NotoSansKR-Light',
      color: '#ffffff',
    },
  });

  return (
    <View style={footerStyle}>
      <TouchableOpacity activeOpacity={1}>
        <Text style={footerText.text}>@ 2022 MJU Convergence Software</Text>
      </TouchableOpacity>
      <SettingModal campus={campus} />
    </View>
  );
}
