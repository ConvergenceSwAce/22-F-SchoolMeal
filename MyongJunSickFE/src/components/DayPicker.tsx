import {HStack, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {getWeek} from '../utils/Day';
import {TouchableOpacity} from 'react-native';

const DayPicker = () => {
  const date = getWeek() || ['.', '.', '.', '.', '.'];
  const day = ['월', '화', '수', '목', '금'];

  const [btnActive, setBtnActive] = useState(0);

  // react-native에서 dom 안쓰고 상태관리로 버튼 클릭 했을 때 눌린 버튼만 className 바꾸기
  const handleTouch = (index: number) => {
    setBtnActive((): number => {
      return index;
    });
  };

  return (
    <HStack space="26px" justifyContent="center" marginY={28}>
      {date.map((date: string, index: number) => (
        <TouchableOpacity
          onPressOut={() => {
            handleTouch(index);
          }}
          className={`${
            btnActive === index ? 'bg-BrandColor/Default' : ''
          } w-[42px] h-[64px] rounded-[12px] justify-center items-center`}
        >
          <VStack alignItems="center">
            <Text
              color={btnActive === index ? 'white' : '#D9D9D9'}
              fontSize={16}
              fontWeight="medium"
            >
              {day[index]}
            </Text>
            <Text
              color={btnActive === index ? 'white' : '#D9D9D9'}
              fontSize={14}
              fontWeight="medium"
            >
              {date}
            </Text>
          </VStack>
        </TouchableOpacity>
      ))}
    </HStack>
  );
};

export default DayPicker;
