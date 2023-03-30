/// <reference types="nativewind/types" />

import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import BottomNavigation from './src/components/BottomNavigation';
import {NativeBaseProvider, StatusBar} from 'native-base';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar />
      <BottomNavigation />
    </NativeBaseProvider>
  );
}

export default codePush(App);
