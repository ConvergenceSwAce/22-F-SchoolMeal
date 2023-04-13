import React, {useEffect} from 'react';

import DayPicker from '../components/DayPicker';
import Header from '../components/Header';
import {useGetIncamMealQuery, useGetJacamMealQuery} from '../redux/api/mealDataApi';
import ErrorModal from '../components/ErrorModal';
import IncamPage from '../pages/IncamPage';
import JacamPage from '../pages/JacamPage';
import {useDispatch, useSelector} from 'react-redux';
import {campus, setCampus} from '../redux/slices/setting';
import {getItemFromAsync} from '../utils/AsyncStorage';

const Home = () => {
  const getCampus: boolean = useSelector(campus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Home.tsx');
    getItemFromAsync('campus')
      .then(res => {
        console.log(res);
        if (res === 'incam') {
          dispatch(setCampus(false));
        } else if (res === 'jacam') {
          dispatch(setCampus(true));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
