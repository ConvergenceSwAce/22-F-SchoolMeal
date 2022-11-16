import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import SettingModal from './SettingModal';

export default function Footer() {
  const footerStyle = StyleSheet.create({
    flex: 1,
    paddingVertical: heightPercentage(20),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#071648',
  });

  const footerText = StyleSheet.create({
    text: {
      marginBottom: heightPercentage(20),
      alignItems: 'center',
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
      <SettingModal />
    </View>
  );
}
