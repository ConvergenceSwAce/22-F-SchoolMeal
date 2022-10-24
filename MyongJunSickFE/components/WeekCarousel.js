import {React, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRecoilValue} from 'recoil';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import {
  monData,
  tueData,
  wedData,
  thuData,
  friData,
  splitMealData,
  splitMealData2,
  monData2,
  tueData2,
  wedData2,
  thuData2,
  friData2,
  restInfo,
} from '../states';

export default function WeekCarousel({day, setMealData, setMealData2}) {
  const restSelect = useRecoilValue(restInfo);
  const today = day;
  splitMealData();
  splitMealData2();
  const mon = useRecoilValue(monData);
  const tue = useRecoilValue(tueData);
  const wed = useRecoilValue(wedData);
  const thu = useRecoilValue(thuData);
  const fri = useRecoilValue(friData);

  const mon2 = useRecoilValue(monData2);
  const tue2 = useRecoilValue(tueData2);
  const wed2 = useRecoilValue(wedData2);
  const thu2 = useRecoilValue(thuData2);
  const fri2 = useRecoilValue(friData2);

  const [monIsPress, setIsMonpress] = useState(false);
  const [tueIsPress, setIsTuepress] = useState(false);
  const [wedIsPress, setIsWedpress] = useState(false);
  const [thuIsPress, setIsThupress] = useState(false);
  const [friIsPress, setIsFripress] = useState(false);

  useEffect(() => {
    switch (today) {
      case 1:
        setIsMonpress(true);
        monPress();
        break;
      case 2:
        setIsTuepress(true);
        tuePress();
        break;
      case 3:
        setIsWedpress(true);
        wedPress();
        break;
      case 4:
        setIsThupress(true);
        thuPress();
        break;
      case 5:
        setIsFripress(true);
        friPress();
        break;
      default:
        setIsMonpress(true);
        monPress();
        break;
    }
  }, [restSelect]);

  let mon_date = mon.date.split('.')[1];
  let tue_date = tue.date.split('.')[1];
  let wed_date = wed.date.split('.')[1];
  let thu_date = thu.date.split('.')[1];
  let fri_date = fri.date.split('.')[1];

  const carouselStyle = StyleSheet.create({
    flex: 10,
    flexDirection: 'row',
    marginHorizontal: widthPercentage(50),
    marginTop: heightPercentage(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const dayStyle = StyleSheet.create({
    fontSize: fontPercentage(16),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#d9d9d9',
    textAlign: 'center',
    marginTop: heightPercentage(7),
  });

  const weekStyle = StyleSheet.create({
    marginVertical: heightPercentage(5),
    fontSize: fontPercentage(18),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7b7b7b',
    textAlign: 'center',
  });

  const touchStyle = StyleSheet.create({
    borderRadius: 20,
    paddingVertical: heightPercentage(5),
    backgroundColor: '#071648',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const defaultTouchStyle = StyleSheet.create({
    borderRadius: 20,
    paddingVertical: heightPercentage(5),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const monPress = () => {
    {
      restSelect === '인문캠퍼스' ? setMealData(mon) : setMealData2(mon2);
    }
    setIsMonpress(true);
    setIsTuepress(false);
    setIsWedpress(false);
    setIsThupress(false);
    setIsFripress(false);
    console.log();
    console.log('monPress');
  };

  const tuePress = () => {
    {
      restSelect === '인문캠퍼스' ? setMealData(tue) : setMealData2(tue2);
    }
    setIsTuepress(true);
    setIsMonpress(false);
    setIsWedpress(false);
    setIsThupress(false);
    setIsFripress(false);
    console.log('tuePress');
  };

  const wedPress = () => {
    {
      restSelect === '인문캠퍼스' ? setMealData(wed) : setMealData2(wed2);
    }
    setIsWedpress(true);
    setIsMonpress(false);
    setIsTuepress(false);
    setIsThupress(false);
    setIsFripress(false);
    console.log('wedPress');
  };

  const thuPress = () => {
    {
      restSelect === '인문캠퍼스' ? setMealData(thu) : setMealData2(thu2);
    }
    setIsThupress(true);
    setIsMonpress(false);
    setIsTuepress(false);
    setIsWedpress(false);
    setIsFripress(false);
    console.log('thuPress');
  };

  const friPress = () => {
    {
      restSelect === '인문캠퍼스' ? setMealData(fri) : setMealData2(fri2);
    }
    setIsFripress(true);
    setIsMonpress(false);
    setIsTuepress(false);
    setIsWedpress(false);
    setIsThupress(false);
    console.log('friPress');
  };

  return (
    <View style={carouselStyle}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={monIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={monPress}
        >
          <Text style={dayStyle}>Mon</Text>
          <Text style={weekStyle}>{mon_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={tueIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={tuePress}
        >
          <Text style={dayStyle}>Tue</Text>
          <Text style={weekStyle}>{tue_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={wedIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={wedPress}
        >
          <Text style={dayStyle}>Wed</Text>
          <Text style={weekStyle}>{wed_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={thuIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={thuPress}
        >
          <Text style={dayStyle}>Thu</Text>
          <Text style={weekStyle}>{thu_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={friIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={friPress}
        >
          <Text style={dayStyle}>Fri</Text>
          <Text style={weekStyle}>{fri_date}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
