import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScrollView} from 'native-base';
import MealCard from '../components/MealCard';

function 명진당() {
  return (
    <ScrollView className="pt-3">
      <MealCard course={'백반'} mealType={'명진당'} order={0} />
      <MealCard course={'샐러드'} mealType={'명진당'} order={1} />
      <MealCard course={'볶음밥'} mealType={'명진당'} order={2} />
    </ScrollView>
  );
}

function 학생회관() {
  return (
    <ScrollView className="pt-3">
      <MealCard course={'조식'} mealType={'학생회관'} order={0} />
      <MealCard course={'중식'} mealType={'학생회관'} order={1} />
    </ScrollView>
  );
}
function 생활관식당() {
  return (
    <ScrollView className="pt-3">
      <MealCard course={'중식'} mealType={'생활관식당'} order={0} />
      <MealCard course={'석식'} mealType={'생활관식당'} order={1} />
    </ScrollView>
  );
}

function 교직원식당() {
  return (
    <ScrollView className="pt-3">
      <MealCard course={'점심'} mealType={'교직원식당'} order={0} />
      <MealCard course={'저녁'} mealType={'교직원식당'} order={1} />
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="명진당" component={명진당} />
      <Tab.Screen name="학생회관" component={학생회관} />
      <Tab.Screen name="생활관식당" component={생활관식당} />
      <Tab.Screen name="교직원식당" component={교직원식당} />
    </Tab.Navigator>
  );
}
