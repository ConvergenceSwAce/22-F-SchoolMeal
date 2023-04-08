import React from 'react';
import MealCard from '../components/MealCard';
import {ScrollView} from 'native-base';

const IncamPage = () => {
  return (
    <ScrollView w="100%" h="80%">
      <MealCard course={'중식A'} mealType={'lunchA'} />
      <MealCard course={'중식B'} mealType={'lunchB'} />
      <MealCard course={'석식'} mealType={'dinner'} />
    </ScrollView>
  );
};

export default IncamPage;
