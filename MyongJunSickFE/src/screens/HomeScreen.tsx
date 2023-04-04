import React from 'react';
import {SafeAreaView} from 'react-native';
import DayPicker from '../components/DayPicker';

import Header from '../components/Header';
import MealCard from '../components/MealCard';
import {Container} from 'native-base';

const Home = () => {
  return (
    <SafeAreaView className="self-center">
      <Header />
      <DayPicker />
      <MealCard />
    </SafeAreaView>
  );
};

export default Home;
