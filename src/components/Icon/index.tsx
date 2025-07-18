import { View } from 'react-native';
import type { Props } from './Icon.types';
import { IconsComponent } from './Icons';
import Typography from '../Typography';
import { useTheme } from 'styled-components/native';

const Icon = ({
  type = 'ShareIcon',
  width,
  height,
  stroke,
  strokeWidth,
  fill,
  chipValue = 0,
  ...props
}: Props) => {
  const IconComponent = IconsComponent[type];
  const { colors } = useTheme();

  return (
    <View testID={`icon-${type}`}>
      <IconComponent
        width={width}
        height={height}
        stroke={stroke}
        strokeWidth={strokeWidth}
        viewBox="0 0 24 24"
        fill={fill ?? 'none'}
        {...props}
      />
      {chipValue > 0 && (
        <View
          style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: colors.red[500],
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: -3,
            bottom: 13,
          }}
        >
          <Typography sizeVariant="semiBold" variant="3xs" color={colors.white}>
            {chipValue}
          </Typography>
        </View>
      )}
    </View>
  );
};

export default Icon;
