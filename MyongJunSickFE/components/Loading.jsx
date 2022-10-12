import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function Loading() {
  const loadingComponent =StyleSheet.create({
    container:{
    width: widthPercentage(396),
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    marginHorizontal: widthPercentage(16),
    marginTop: heightPercentage(14),
    paddingVertical: heightPercentage(12),
 },
 text:{
  fontSize: fontPercentage(12),
  color: '#000000'
 }
 });
  return (
    <View style={loadingComponent.container}>
      <Text style={loadingComponent.text}>학식 메뉴를 가져오고 있어요!</Text>
    </View>
  );
}
