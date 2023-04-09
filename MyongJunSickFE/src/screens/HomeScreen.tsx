import React from 'react';
import {SafeAreaView} from 'react-native';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import {useGetIncamMealQuery} from '../redux/api/mealDataApi';
import ErrorModal from '../components/ErrorModal';
import IncamPage from '../pages/IncamPage';
import {useSelector} from 'react-redux';
import {campus} from '../redux/slices/setting';
import JacamPage from '../pages/JacamPage';
// import JacamPage from '../pages/JacamPage';

const Home = () => {
  const getCampus: boolean = useSelector(campus);

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
      {getCampus ? <JacamPage /> : <IncamPage />}
    </SafeAreaView>
  );
};

export default Home;
