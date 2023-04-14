import React, {useState} from 'react';
import {Center, HStack, Switch, Text, VStack, View} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {campus, setCampus} from '../redux/slices/setting';
import {setItemToAsync} from '../utils/AsyncStorage';
import {Linking, Touchable, TouchableOpacity} from 'react-native';

const SettingPage = () => {
  const dispatch = useDispatch();
  const getCampus = useSelector(campus);

  const [onToggle, setOnToggle] = useState(getCampus);

  const handleToggle = () => {
    setOnToggle(!onToggle);
    dispatch(setCampus(onToggle));
    setItemToAsync('campus', onToggle ? 'jacam' : 'incam');
  };

  return (
    <View className="flex-1 justify-center">
      <VStack className="items-center space-y-5">
        <Center w="64" h="20" bg="indigo.100" rounded="md" shadow={3}>
          <HStack space={2} alignItems="center">
            <Text>인문캠퍼스</Text>
            <Switch name="campus" isChecked={getCampus} onToggle={handleToggle} />
            <Text>자연캠퍼스</Text>
          </HStack>
        </Center>
        <Center w="64" h="20" bg="indigo.200" rounded="md" shadow={3}>
          <TouchableOpacity
            className="w-64 h-20 items-center justify-center"
            onPressOut={() => {
              Linking.openURL('https://toss.me/grayash/1000');
            }}
          >
            <Text>☕️커피 값 후원하기☕️</Text>
          </TouchableOpacity>
        </Center>
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
          <TouchableOpacity
            className="w-64 h-20 items-center justify-center"
            onPressOut={() => {
              Linking.openURL('http://pf.kakao.com/_tuMKxj');
            }}
          >
            <Text>✉️카카오톡 채널✉️</Text>
          </TouchableOpacity>
        </Center>
        <Center w="64" h="20" bg="indigo.400" rounded="md" shadow={3}>
          <Text>🍽명지대가 준비한 식사 : 명준식🍽</Text>
        </Center>
        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3}>
          <Text>버전 : 2.0</Text>
        </Center>
        <Center w="64" h="20" bg="indigo.600" rounded="md" shadow={3}>
          <Text>@ 2023 MJS Copyright.</Text>
        </Center>
      </VStack>
    </View>
  );
};

export default SettingPage;
