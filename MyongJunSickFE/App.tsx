/// <reference types="nativewind/types" />

import React, {useEffect} from 'react';
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
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <StatusBar barStyle={'dark-content'} />
        <BottomNavigation />
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
