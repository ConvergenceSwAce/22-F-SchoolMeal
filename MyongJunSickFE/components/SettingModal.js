import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {fontPercentage, heightPercentage, widthPercentage} from '../Responsive';

const SettingModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>환경설정</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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
    flex: 1,
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
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(30),
    fontSize: fontPercentage(12),
    fontFamily: 'NotoSansKR-Light',
    color: '#ffffff',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    justifyContent: 'flex-start',
    fontSize: fontPercentage(16),
    fontFamily: 'NotoSansKR-Medium',
    color: '#071648',
    marginBottom: heightPercentage(10),
  },
});

export default SettingModal;
