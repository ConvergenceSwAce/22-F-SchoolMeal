import React from 'react';
import MealCard from '../components/MealCard';
import {ScrollView} from 'native-base';

const IncamPage = () => {
  return (
    <ScrollView w="100%" h="80%">
      <MealCard course={'중식A'} mealType={'incam'} order={0} />
      <MealCard course={'중식B'} mealType={'incam'} order={1} />
      <MealCard course={'석식'} mealType={'incam'} order={2} />
    </ScrollView>
  );
};

export default IncamPage;
