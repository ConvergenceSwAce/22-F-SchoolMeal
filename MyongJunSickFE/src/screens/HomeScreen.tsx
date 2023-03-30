import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header />
    </SafeAreaView>
  );
};

export default Home;
