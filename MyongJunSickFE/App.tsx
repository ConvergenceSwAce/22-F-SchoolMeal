/// <reference types="nativewind/types" />

import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import BottomNavigation from './src/routes/BottomNavigation';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar barStyle={'dark-content'} />
      <BottomNavigation />
    </NativeBaseProvider>
  );
}

export default codePush(App);
