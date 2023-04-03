import React from 'react';
import {SafeAreaView} from 'react-native';
import DayPicker from '../components/DayPicker';

import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <DayPicker />
    </SafeAreaView>
  );
};

export default Home;
