/// <reference types="nativewind/types" />

import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

type Props = {};

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar barStyle="dark-content" />
      <Text className="text-slate-800">Styling just works! 🎉</Text>
    </View>
  );
}

export default codePush(App);
