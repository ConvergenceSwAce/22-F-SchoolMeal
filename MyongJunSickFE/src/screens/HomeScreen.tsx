import React from 'react';
import {SafeAreaView} from 'react-native';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import dummyData from '../utils/dummyData.json';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <DayPicker />
      <MealCard course={'A'} data={dummyData} />
      <MealCard course={'B'} data={dummyData} />
    </SafeAreaView>
  );
};

export default Home;
