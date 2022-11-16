import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useRecoilState} from 'recoil';
import {restInfo} from '../states';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

export default function Header({month, year, campus}) {
  useEffect(() => {
    campus === 'seoul' ? setRest('인문캠퍼스') : setRest('자연캠퍼스');
  }, [campus]);
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
    width: widthPercentage(390),
    height: heightPercentage(60),
    marginTop: StatusBarHeight + heightPercentage(10),
    marginHorizontal: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const dateStyle = StyleSheet.create({
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  });

  const title = StyleSheet.create({
    component: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    text: {
      flexGrow: 1,
      fontSize: fontPercentage(16),
      fontFamily: 'NotoSansKR-Bold',
      textAlign: 'center',
      color: '#071648',
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
            fontSize: fontPercentage(20),
            fontFamily: 'NotoSansKR-Bold',
            color: '#071648',
            marginLeft: widthPercentage(10),
          }}
        >
          {month + '월'}
        </Text>
        <Text
          style={{
            fontSize: fontPercentage(16),
            fontFamily: 'NotoSansKR-Regular',
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
