import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function 명진당() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>명진당</Text>
    </View>
  );
}

function 학생회관() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>학생회관</Text>
    </View>
  );
}
function 생활관식당() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>생활관</Text>
    </View>
  );
}

function 교직원식당() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>교직원식당</Text>
    </View>
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
