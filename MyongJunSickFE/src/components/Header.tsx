import {Container, Text, View} from 'native-base';
import React from 'react';

const Header = () => {
  return (
    <View className="flex flex-row items-baseline relative gap-2 ml-2">
      <Text className="pt-3 flex-wrap flex-grow-0 text-[28px] font-bold text-center text-[BrandColor/Default]">
        11월
      </Text>
      <Text className="flex-wrap flex-grow-0 font-medium text-center text-[#a8a8a8]">2022</Text>
    </View>
  );
};

export default Header;
