import React from 'react';
import {SafeAreaView} from 'react-native';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import IncamPage from '../pages/incamPage';
import {useGetIncamMealQuery} from '../redux/api/mealDataApi';
import ErrorModal from '../components/ErrorModal';

const Home = () => {
  const {isError} = useGetIncamMealQuery({
    pollingInterval: 3000,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (isError) {
    return <ErrorModal />;
  }

  return (
    <SafeAreaView>
      <Header />
      <DayPicker />
      <IncamPage />
    </SafeAreaView>
  );
};

export default Home;
