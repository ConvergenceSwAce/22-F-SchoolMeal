import {Stack, Text, View} from 'native-base';
import React from 'react';
import {nowMonth, nowYear} from '../utils/Day';

const month: string = nowMonth() || '..';
const year: string = nowYear() || '....';

const Header = () => {
  return (
    <View className="items-center">
      <Stack className="flex-row gap-2">
        <Text className="pt-3 flex-wrap text-[28px] font-bold self-center text-[#071648]">
          {month}월
        </Text>
        <Text className="self-end font-medium text-[#a8a8a8]">{year}</Text>
      </Stack>
      <Text className="pt-3 items-center text-center text-sm font-bold text-[#071648]">
        인문캠퍼스
      </Text>
    </View>
  );
};

export default Header;
