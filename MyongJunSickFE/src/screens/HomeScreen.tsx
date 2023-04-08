import React from 'react';
import {SafeAreaView} from 'react-native';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import IncamPage from '../pages/incamPage';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <DayPicker />
      <IncamPage />
    </SafeAreaView>
  );
};

export default Home;
