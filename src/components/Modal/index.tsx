import { Modal } from 'react-native';
import { ModalBackground, ModalContainer } from './Modal.styles';
import type { ModalPropsCustom } from './Modal.types';

const ModalCustom = ({ visible, children }: ModalPropsCustom) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <ModalBackground>
        <ModalContainer>{children}</ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default ModalCustom;
