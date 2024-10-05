import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';
import Button from '../Button';
import { useState } from 'react';
import Animated from 'react-native-reanimated';

const ModalStory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Button
        size="medium"
        variant="primary"
        textSizeVariant="medium"
        textVariant="base"
        onPress={() => {
          setModalVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <Animated.View>
          <Button
            size="medium"
            variant="primary"
            textSizeVariant="medium"
            textVariant="base"
            onPress={() => {
              setModalVisible(false);
            }}
          >
            Close Modal
          </Button>
        </Animated.View>
      </Modal>
    </View>
  );
};

const Component: Meta<typeof ModalStory> = {
  title: 'Modal',
  component: ModalStory,
  argTypes: {},

  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export const Primary: StoryObj<typeof ModalStory> = {};
Primary.args = {};

export default Component;
