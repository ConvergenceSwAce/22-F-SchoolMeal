import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItems from './ListItems';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function MenuList(props) {
  const {data} = props; // lunch or dinner
  const menuComponent = {
    width: widthPercentage(396),
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    marginHorizontal: widthPercentage(16),
    marginTop: heightPercentage(14),
    paddingVertical: heightPercentage(12),
  };
  return (
    <View style={menuComponent}>
      {data && data.map(menu => <ListItems key={menu} menu={menu} />)}
    </View>
  );
}
