import React from 'react';
import {Box, Container, Skeleton, Stack, VStack} from 'native-base';
const CardSkeleton = () => {
  return (
    <Container className="flex-col w-screen items-center self-center">
      <Stack className="w-screen flex-row justify-between px-[16px]"></Stack>
      <Box className="w-screen flex-col px-[16px] py-[24px]">
        <VStack
          space="8px"
          className="border-solid border-[1px] border-[#DBDBDB] rounded-[12px] p-[16px]"
        >
          <Skeleton className="w-full h-[16px]" rounded="full" />
          <Skeleton className="w-full h-[16px]" rounded="full" />
          <Skeleton className="w-full h-[16px]" rounded="full" />
          <Skeleton className="w-full h-[16px]" rounded="full" />
          <Skeleton className="w-full h-[16px]" rounded="full" />
        </VStack>
      </Box>
    </Container>
  );
};

export default CardSkeleton;
