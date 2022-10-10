import React, { useState } from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import Modal from 'react-native-modal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';

export default function Btn({btnName, data}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={isModalVisible ? btn.isPress : btn.default}>
      <Text style={isModalVisible ?btn.isPressText : btn.text} onPress={toggleModal} >{btnName}</Text>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      >
        <View style={modalComponent.component}>
          {data &&
            data.map(menu => (
              <View style={modalComponent.itemComponent}>
                <BouncyCheckbox
                  key={menu}
                  size={25}
                  fillColor="#071648"
                  unfillColor="#fff"
                  textStyle={{
                    textDecorationLine: 'none',
                    color: '#000000',
                  }}
                  text={menu}
                  iconStyle={{borderColor: 'red'}}
                  innerIconStyle={{borderWidth: 2}}
                  onPress={
                    () => console.log(menu) //스테이트에 담아서 투표 누르면 통신 추가해야함
                  }
                />
              </View>
            ))}

          <Button title={btnName} onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const modalComponent = StyleSheet.create({
  component: {
    flexDirection: 'column',
    // textAlign: 'left',
    alignItems: 'center',
    paddingHorizontal: widthPercentage(10),
    paddingVertical: heightPercentage(10),
    width: widthPercentage(320),
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  itemComponent: {
    width: widthPercentage(280),
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: heightPercentage(8),
    marginBottom: heightPercentage(8),
  },
});

const btn = StyleSheet.create({
  isPress: {
    width: widthPercentage(190),
    height: heightPercentage(50),
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#071648',
    justifyContent: 'center',
  },
  default: {
    width: widthPercentage(190),
    height: heightPercentage(50),
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontPercentage(16),
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#a8a8a8',
  },
  isPressText: {
    fontSize: fontPercentage(16),
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#071648',
  },
});