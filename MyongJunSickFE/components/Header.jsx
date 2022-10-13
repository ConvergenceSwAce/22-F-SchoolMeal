import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function Header(props) {
  const headerStyle = StyleSheet.create({
    width: widthPercentage(428),
    height: heightPercentage(60),
    marginTop: heightPercentage(50),
    marginHorizontal: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const dateStyle = StyleSheet.create({
    flex:1,
    width: widthPercentage(193),
    height: heightPercentage(41),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  });

  const title = StyleSheet.create({
    component: {
      flex: 1,
      width: widthPercentage(218),
      height: heightPercentage(43),
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    text: {
      flexGrow: 1,
      fontSize: fontPercentage(16),
      fontWeight: 'bold',
      fontStyle: 'normal',
      textAlign: 'center',
      color: '#071648',
      marginLeft: widthPercentage(20),
    },
  });

  return (
    <View style={headerStyle}>
    <View style={dateStyle}>
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
        {props.month}
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
        {props.year}
      </Text>
    </View>
    <View style={title.component}>
      <Text style={title.text}>{props.title}</Text>
    </View>
    </View>
  );
}
