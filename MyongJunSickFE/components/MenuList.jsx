import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItems from './ListItems';

export default function MenuList(props) {
  const {data} = props; // lunch or dinner
  const menuComponent = StyleSheet.create({
    component: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 16,
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#dbdbdb',
      marginHorizontal: 16,
      marginTop: 12,
      paddingVertical: 8,
    },
  });
  return (
    <View style={menuComponent}>
      {data.map(menu => (
        <ListItems key={menu} menu={menu} />
      ))}
    </View>
  );
}
