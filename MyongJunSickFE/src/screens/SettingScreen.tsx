import React, {useState} from 'react';
import {Center, HStack, Switch, Text, VStack} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {campus, setCampus} from '../redux/slices/setting';
import {setItemToAsync} from '../utils/AsyncStorage';

const SettingPage = () => {
  const dispatch = useDispatch();
  const getCampus = useSelector(campus);

  const [onToggle, setOnToggle] = useState(getCampus);

  const handleToggle = () => {
    setOnToggle(!onToggle);
    setItemToAsync('campus', onToggle ? 'jacam' : 'incam');
    dispatch(setCampus(onToggle));
  };

  return (
    <VStack space={4} alignItems="center">
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
        <HStack space={2} alignItems="center">
          <Text>인문캠퍼스</Text>
          <Switch name="campus" isChecked={getCampus} onToggle={handleToggle} />
          <Text>자연캠퍼스</Text>
        </HStack>
      </Center>
      <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3}></Center>
    </VStack>
  );
};

export default SettingPage;
