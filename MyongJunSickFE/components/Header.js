import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useRecoilState, useRecoilValue} from 'recoil';
import {restInfo} from '../states';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

export default function Header({month, year}) {
  const [rests, setRest] = useRecoilState(restInfo);
  const touchRest = () => {
    if (rests === '인문캠퍼스') {
      setRest('자연캠퍼스');
      console.log();
    } else {
      setRest('인문캠퍼스');
    }
  };

  const headerStyle = StyleSheet.create({
    width: widthPercentage(428),
    height: heightPercentage(60),
    marginTop: StatusBarHeight + heightPercentage(10),
    marginHorizontal: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const dateStyle = StyleSheet.create({
    flex: 1,
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
      marginLeft: widthPercentage(60),
    },
  });

  const logoStyle = StyleSheet.create({
    contain: {
      width: widthPercentage(35),
      height: heightPercentage(35),
    },
  });

  return (
    <View style={headerStyle}>
      <View style={dateStyle}>
        <ImageBackground
          style={logoStyle.contain}
          source={require('../assets/images/CalendarIcon.png')}
          resizeMode="contain"
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
          {month + '월'}
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
          {year}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={touchRest}>
        <View style={title.component}>
          <Text style={title.text}>{rests}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
