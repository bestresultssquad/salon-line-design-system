import Icon from '../Icon';
import Switch from '../Switch';
import Typography from '../Typography';
import { Container, LeftContainer } from './MenuItem.styles';
import type { MenuItemProps } from './MenuItem.types';
import { useState } from 'react';

const MenuItem = ({
  leftIcon,
  onPress,
  title,
  useSwitch = false,
  strokeWidth = 1.5,
}: MenuItemProps) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <Container
      testID="container-menu-item"
      onPress={() => !useSwitch && onPress()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      pressed={pressed}
      disabled={useSwitch}
    >
      <LeftContainer>
        <Icon
          testID="icon-left-menu-item"
          height={20}
          width={20}
          stroke="black"
          type={leftIcon}
          strokeWidth={strokeWidth}
        />
        <Typography sizeVariant="medium" variant="sm">
          {title}
        </Typography>
      </LeftContainer>
      {useSwitch && (
        <Switch
          //@ts-ignore
          testID="switch-menu-item"
          onPress={() => {
            setSwitchActive(!switchActive);
          }}
          active={switchActive}
        />
      )}
      {!useSwitch && (
        <Icon
          testID="icon-right-menu-item"
          height={24}
          width={24}
          type="ChevronRightIcon"
          stroke="black"
          strokeWidth={1.5}
        />
      )}
    </Container>
  );
};

export default MenuItem;
