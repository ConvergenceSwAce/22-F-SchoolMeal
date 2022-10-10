import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function WeekCarousel() {
  const dayStyle = StyleSheet.create({
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#d9d9d9',
    textAlign: 'center',
    marginTop: 7,
  });

  const weekStyle = StyleSheet.create({
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7b7b7b',
    textAlign: 'center',
  });

    const onPress = () => {
      console.log('onPress');
    };

  return (
    <View style={{flex: 10, flexDirection: 'row', marginHorizontal: 44, marginTop: 20}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <View
            style={{
              width: 44,
              height: 64,
              borderRadius: 8,
              backgroundColor: '#071648',
              alignItems: 'center',
            }}
          >
            <Text style={dayStyle}>S</Text>
            <Text style={weekStyle}>1</Text>
          </View>
        </TouchableOpacity>
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
}
