import dayjs from 'dayjs';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import DinnerForm from '../components/DinnerForm';
import Footer from '../components/Footer';
import MealCarousel from '../components/MealCarousel';
import MealTiltle from '../components/MealTiltle';
import MenuList from '../components/MenuList';
import {heightPercentage} from '../Responsive';
import {isDinnerSubmit} from '../states';

export default function SeoulCamView({mealData, campus}) {
  let now = dayjs();
  let date = now.format('MM.DD');

  const dinnerSumbit = useRecoilValue(isDinnerSubmit);

  const [AorB, setAorB] = useState('중식A');

  const lunchName = x => {
    setAorB(x);
    console.log(x);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{height: 800}}>
      <MealTiltle type={AorB} time={'11:30 - 14:00'} />
      <MealCarousel data={mealData} lunchName={lunchName} />
      <MealTiltle type={'석식'} time={'17:30 - 19:00'} />
      <MenuList data={mealData.dinner} />
      {date === mealData.date && !dinnerSumbit ? (
        <DinnerForm mealData={mealData} title={'석식'} />
      ) : (
        <></>
      )}
      <View style={{height: heightPercentage(60)}} />
      <Footer campus={campus} />
    </ScrollView>
  );
}
