import React, {useEffect} from 'react';
import {Box, Container, Skeleton, Stack, Text, VStack} from 'native-base';
import {useGetIncamMealQuery} from '../redux/api/mealDataApi';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/reducers';

const MealCard = ({
  course = '이 준비중입니다.',
  mealType = 'lunchA',
}: {
  course: string;
  mealType: string;
}) => {
  const day: number = useSelector((state: RootState) => state.pickDay.day);

  useEffect(() => {
    console.log('현재 선택한' + day);
  }, [day]);

  const {
    data = ['준비중입니다.'],
    isFetching,
    isLoading,
  } = useGetIncamMealQuery({
    pollingInterval: 3000,
    refetchOnReconnect: true,
    skip: false,
  });

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
          {isLoading ? (
            data &&
            data[day][mealType].map((item: [], index: number) => (
              <Stack key={index} className="flex-row justify-between items-center">
                <Text className="text-[16px] font-normal">{item}</Text>
                <Text className="text-[6px] text-[#ABABAB]">●</Text>
              </Stack>
            ))
          ) : (
            <>
              <Skeleton className="w-full h-[16px]" rounded="full" />
              <Skeleton className="w-full h-[16px]" rounded="full" />
              <Skeleton className="w-full h-[16px]" rounded="full" />
              <Skeleton className="w-full h-[16px]" rounded="full" />
              <Skeleton className="w-full h-[16px]" rounded="full" />
            </>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default MealCard;
