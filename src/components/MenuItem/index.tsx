import { useTheme } from 'styled-components/native';
import Icon from '../Icon';
import Switch from '../Switch';
import Typography from '../Typography';
import { Container, LeftContainer } from './MenuItem.styles';
import type { MenuItemProps } from './MenuItem.types';
import { useState } from 'react';

const MenuItem = ({
  leftIconSize = 20,
  leftIcon,
  onPress,
  title,
  useSwitch = false,
  strokeWidth = 1.5,
  removeBorderBottom,
  strokeColor,
  rightIcon,
  rightIconSize,
}: MenuItemProps) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const { themed } = useTheme();

  return (
    <Container
      testID={`container-menu-item-${title}`}
      onPress={() => !useSwitch && onPress()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      pressed={pressed}
      disabled={useSwitch}
      removeBorderBottom={removeBorderBottom ?? false}
    >
      <LeftContainer>
        <Icon
          testID="icon-left-menu-item"
          height={leftIconSize}
          width={leftIconSize}
          stroke={strokeColor ?? themed.text}
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
          height={rightIconSize ?? 24}
          width={rightIconSize ?? 24}
          type={rightIcon ?? 'ChevronRightIcon'}
          stroke={strokeColor ?? themed.text}
          strokeWidth={1.5}
        />
      )}
    </Container>
  );
};

export default MenuItem;
