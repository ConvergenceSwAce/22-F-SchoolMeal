import React from 'react';
import {Box, FlatList, HStack, Skeleton, Spacer, Text} from 'native-base';
import {useGetNoticeQuery} from '../redux/api/mealDataApi';

const NotificationScreen = () => {
  const {data, isLoading, isError} = useGetNoticeQuery({
    pollingInterval: 3000,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (isLoading || isError) {
    return (
      <>
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
        <Skeleton.Text className="p-[12px]" />
      </>
    );
  }

  return (
    <Box>
      <FlatList
        data={data}
        className="flex-0 h-[100%]"
        renderItem={({item}: {item: {작성일: string; 제목: string}}) => (
          <Box className="flex-grow-0 py-[10] px-[7] w-full border-[#071648] border-b-[1px] rounded-[12px]">
            <HStack justifyContent="space-between">
              <Text className="w-[80%] text-[#071648] font-bold">{item.제목}</Text>
              <Spacer />
              <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                {item.작성일}
              </Text>
            </HStack>
          </Box>
        )}
      />
    </Box>
  );
};

export default NotificationScreen;
