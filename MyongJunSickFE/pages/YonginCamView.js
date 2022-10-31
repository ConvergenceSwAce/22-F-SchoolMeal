import React from 'react';
import CafeteriaCarousel from '../components/CafeteriaCarousel';

export default function YonginCamView({mealData, campus}) {
  console.log('yongincam', mealData);
  return (
    <>
      <CafeteriaCarousel mealData={mealData} />
    </>
  );
}
