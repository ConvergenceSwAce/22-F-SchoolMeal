import React from 'react';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import {useGetIncamMealQuery} from '../redux/api/mealDataApi';
import ErrorModal from '../components/ErrorModal';
import IncamPage from '../pages/IncamPage';
import JacamPage from '../pages/JacamPage';
import {useSelector} from 'react-redux';
import {campus} from '../redux/slices/setting';
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
    <>
      <Header />
      <DayPicker />
      {getCampus ? <JacamPage /> : <IncamPage />}
    </>
  );
};

export default Home;
