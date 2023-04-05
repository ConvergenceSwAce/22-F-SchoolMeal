import React from 'react';
import {Box, Container, Stack, Text, VStack} from 'native-base';

interface MealCardProps {
  course: string;
  data: string[];
}

const MealCard = ({course, data}: MealCardProps) => {
  return (
    <Container className="flex-col w-screen items-center self-center">
      <Stack className="w-screen flex-row justify-between px-[16px]">
        <Text className="text-[18px] font-bold">오늘의 중식{course}</Text>
        <Text className="text-[#7B7B7B] text-[14px]">11:30 - 14:00</Text>
      </Stack>
      <Box className="w-screen flex-col px-[16px] py-[24px]">
        <VStack
          space="8px"
          className="border-solid border-[1px] border-[#DBDBDB] rounded-[12px] p-[16px]"
        >
          {data.map((item, index) => (
            <Stack key={index} className="flex-row justify-between items-center">
              <Text className="text-[16px] font-normal">{item}</Text>
              <Text className="text-[8px] text-[#ABABAB]">●</Text>
            </Stack>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

MealCard.defaultProps = {
  course: ' 준비중입니다.',
  data: ['등록된 식단내용이 없습니다.'],
};

export default MealCard;
