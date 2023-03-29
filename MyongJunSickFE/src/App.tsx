import React from 'react';
import {Suspense} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

function Main(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}
function App(): JSX.Element {
  return (
    <Suspense>
      <Main />
    </Suspense>
  );
}
export default CodePush(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#fff',
  },
  splash: {
    flex: 1,
    flexDirection: 'column',
  },
});
