import {Stack, Text, View} from 'native-base';
import React from 'react';
import {nowMonth, nowYear} from '../utils/Day';
import {useSelector} from 'react-redux';
import {campus} from '../redux/slices/setting';

const month: string = nowMonth() || '..';
const year: string = nowYear() || '....';

const Header = () => {
  const getCampus: boolean = useSelector(campus);

  return (
    <View className="w-screen flex-row justify-between px-[16px]">
      <Stack className="flex-row gap-2">
        <Text className="pt-3 flex-wrap text-[28px] font-bold self-center text-[#071648]">
          {month}월
        </Text>
        <Text className="self-end font-medium text-[#a8a8a8]">{year}</Text>
      </Stack>
      <Text className="pt-3 items-center text-center text-sm font-bold text-[#071648]">
        {getCampus ? '자연캠퍼스' : '인문캠퍼스'}
      </Text>
    </View>
  );
};

export default Header;
