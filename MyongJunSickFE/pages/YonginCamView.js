import React from 'react';
import {View} from 'react-native';
import CafeteriaCarousel from '../components/CafeteriaCarousel';
import {heightPercentage} from '../Responsive';

export default function YonginCamView(props) {
  const mealData = props.mealData;
  console.log('yongincam', mealData);
  return (
    <>
      <CafeteriaCarousel mealData={mealData} />
    </>
  );
}
