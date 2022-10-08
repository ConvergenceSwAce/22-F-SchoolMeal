import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet, Image, Text} from 'react-native';

const Header = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, bottom: 0}}>
      <Image
        style={{width: 32, height: 32, marginTop: 12}}
        source={require('./assets/CalendarIcon.png')}
      />
      <Text
        style={{
          width: 68,
          height: 41,
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#071648',
          marginLeft: 10,
          marginTop: 12,
        }}
      >
        June
      </Text>
      <Text
        style={{
          width: 37,
          height: 23,
          fontSize: 16,
          fontWeight: '500',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#a8a8a8',
          marginLeft: 10,
          marginTop: 20,
        }}
      >
        2022
      </Text>
    </View>
  );
};

const WeekCarousel = () => {
  return (
    <View style={{flex: 10, flexDirection: 'row', marginLeft: 44}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>S</Text>
        <Text style={weekStyle}>1</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>M</Text>
        <Text style={weekStyle}>2</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>T</Text>
        <Text style={weekStyle}>3</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>W</Text>
        <Text style={weekStyle}>4</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>T</Text>
        <Text style={weekStyle}>5</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>F</Text>
        <Text style={weekStyle}>6</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={dayStyle}>S</Text>
        <Text style={weekStyle}>7</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <WeekCarousel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const dayStyle = StyleSheet.create({
  fontSize: 16,
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#d9d9d9',
});

const weekStyle = StyleSheet.create({
  marginTop: 10,
  fontSize: 18,
  fontWeight: '500',
  fontStyle: 'normal',
  color: '#7b7b7b',
});

export default App;
