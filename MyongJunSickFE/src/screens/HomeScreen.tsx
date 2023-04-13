import React from 'react';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import {useGetIncamMealQuery, useGetJacamMealQuery} from '../redux/api/mealDataApi';
import ErrorModal from '../components/ErrorModal';
import IncamPage from '../pages/IncamPage';
import JacamPage from '../pages/JacamPage';
import {useSelector} from 'react-redux';
import {campus} from '../redux/slices/setting';

const Home = () => {
  const getCampus: boolean = useSelector(campus);

  const {isError} = useGetIncamMealQuery({
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const {isError: isError2} = useGetJacamMealQuery({
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (isError || isError2) {
    return <ErrorModal />;
  }

  return (
    <>
      <Header />
      <DayPicker />
      {getCampus ? <JacamPage /> : <IncamPage />}
    </>
  );
};

export default Home;
