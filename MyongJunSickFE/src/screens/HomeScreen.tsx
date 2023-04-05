import React from 'react';
import {SafeAreaView} from 'react-native';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import {getMealData} from '../utils/MealData';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <DayPicker />
      <MealCard course={'A'} data={getMealData('월').lunchA} />
      <MealCard course={'B'} data={getMealData('월').lunchB} />
    </SafeAreaView>
  );
};

export default Home;
