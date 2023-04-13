import React from 'react';
import {Box, Container, Stack, Text, VStack} from 'native-base';
import {useGetIncamMealQuery, useGetJacamMealQuery} from '../redux/api/mealDataApi';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/reducers';
import CardSkeleton from './CardSkeleton';
const MealCard = ({
  course = '이 준비중입니다.',
  mealType = 'incam',
  order = 0,
}: {
  course: string;
  mealType: string;
  order: number;
}) => {
  const day: number = useSelector((state: RootState) => state.pickDay.day);

  const {data, isLoading, isError} = useGetIncamMealQuery({
    pollingInterval: 3000,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
  } = useGetJacamMealQuery({
    pollingInterval: 3000,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  // mealType이 명진당이면 0, 학생회관이면 1, 생활관식당이면 2, 교직원식당이면 3

  const mealTypeNum = (): number => {
    if (mealType === '명진당') {
      return 0;
    } else if (mealType === '학생회관') {
      return 1;
    } else if (mealType === '생활관식당') {
      return 2;
    } else if (mealType === '교직원식당') {
      return 3;
    } else return 0;
  };

  if (isError || !data || isLoading || isError2 || !data2 || isLoading2) {
    return <CardSkeleton />;
  }

  return (
    <Container className="flex-col w-screen items-center self-center">
      <Stack className="w-screen flex-row justify-between px-[16px]">
        <Text className="text-[18px] font-bold">오늘의 {course}</Text>
        <Text className="text-[#7B7B7B] text-[14px]">
          {course === '석식' ? '17:30 - 19:00' : '11:30 - 14:00'}
        </Text>
      </Stack>
      <Box className="w-screen flex-col px-[16px] py-[24px]">
        <VStack
          space="8px"
          className="border-solid border-[1px] border-[#DBDBDB] rounded-[12px] p-[16px]"
        >
          {mealType === 'incam'
            ? data[day]['menu'][order].map((item: [], index: number) => (
                <Stack key={index} className="flex-row justify-between items-center">
                  <Text className="text-[16px] font-normal">{item}</Text>
                  <Text className="text-[6px] text-[#ABABAB]">●</Text>
                </Stack>
              ))
            : data2[mealTypeNum()][day]['menu'][order].map((item: [], index: number) => (
                <Stack key={index} className="flex-row justify-between items-center">
                  <Text className="text-[16px] font-normal">{item}</Text>
                  <Text className="text-[6px] text-[#ABABAB]">●</Text>
                </Stack>
              ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default MealCard;
