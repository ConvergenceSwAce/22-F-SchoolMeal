import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Pressable, View, Switch} from 'react-native';
import {fontPercentage, heightPercentage, widthPercentage} from '../Responsive';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';
import {useRecoilState, useRecoilValue} from 'recoil';
import {campusInfo} from '../states';

const SettingModal = () => {
  const [campus, setCampus] = useRecoilState(campusInfo);

  useEffect(() => {
    campus === 'yongin' ? setIsEnabled(true) : setIsEnabled(false); // AsyncStorage에 저장된 데이터가 'seoul'이면 true, 'yongin'이면 false를 반환한다. (Switch의 값이 바뀐다.)
  }, []); // AsyncStorage에서 데이터를 가져와서 selectData에 저장한다.

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  };

  const save = async () => {
    await AsyncStorage.setItem('campus', select)
      .then(() => {
        console.log('save success ' + select);
        setCampus(select);
      })
      .catch(err => {
        console.log(err);
      }); // AsyncStorage에 데이터를 저장한다. (isEnabled가 true면 'seoul', false면 'yongin'을 저장한다.)
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  let select = !isEnabled ? 'seoul' : 'yongin'; // Switch의 값에 따라 select에 'seoul' 또는 'yongin'을 저장한다. (AsyncStorage에 저장하기 위함)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>환경설정</Text>
            <Text style={styles.modalText}>초기화면 설정</Text>
            <Switch
              trackColor={{false: '#767577', true: '#005eb8'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#767577"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.modalText}>{isEnabled ? '자연캠퍼스' : '인문캠퍼스'}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                save();
              }}
            >
              <Text style={styles.textStyle}>적용하기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>환경설정</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: widthPercentage(100),
    paddingTop: heightPercentage(20),
    paddingBottom: heightPercentage(20),
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: '#005eb8',
  },
  buttonClose: {
    marginTop: heightPercentage(20),
    backgroundColor: '#005eb8',
  },
  textStyle: {
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(30),
    fontSize: fontPercentage(12),
    fontFamily: 'NotoSansKR-Light',
    color: '#ffffff',
  },
  modalText: {
    marginTop: heightPercentage(10),
    marginBottom: heightPercentage(15),
    textAlign: 'center',
  },
  modalTitle: {
    justifyContent: 'flex-start',
    fontSize: fontPercentage(16),
    fontFamily: 'NotoSansKR-Medium',
    color: '#071648',
    marginBottom: heightPercentage(20),
  },
});

export default SettingModal;
