import {Text, View} from 'native-base';
import React from 'react';
import {nowMonth, nowYear} from '../utils/Day';

const month: string = nowMonth() || '..';
const year: string = nowYear() || '....';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-grow-0 flex-row relative gap-2 ml-4 ">
        <Text className="pt-3 flex-wrap text-[28px] font-bold self-center text-[#071648]">
          {month}월
        </Text>
        <Text className="flex-grow-0 flex-wrap self-end font-medium text-[#a8a8a8]">{year}</Text>
      </View>
      <Text className="flex-grow-0 items-center text-center text-sm font-bold mr-4 text-[#071648]">
        인문캠퍼스
      </Text>
    </View>
  );
};

export default Header;
