import React from 'react';
import {AlertDialog, Button, Center} from 'native-base';
import RNRestart from 'react-native-restart';

const ErrorModal = () => {
  const isOpen = true;

  const cancelRef = React.useRef(null);
  return (
    <Center>
      <AlertDialog isOpen leastDestructiveRef={cancelRef}>
        <AlertDialog.Content>
          <AlertDialog.Header>인터넷에 연결되지 않았습니다.</AlertDialog.Header>
          <AlertDialog.Body>인터넷에 연결 후 앱을 재실행해주세요😊</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button
              colorScheme="danger"
              onPress={() => {
                RNRestart.restart();
              }}
            >
              재시작
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default ErrorModal;
