/// <reference types="nativewind/types" />

import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import BottomNavigation from './src/routes/BottomNavigation';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = extendTheme({
    fonts: {
      heading: 'NotoSansKR-Regular',
      body: 'NotoSansKR-Regular',
    },
  });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle={'dark-content'} />
        <BottomNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}

export default codePush(App);
