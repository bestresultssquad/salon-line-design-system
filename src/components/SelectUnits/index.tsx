import { TouchableOpacity } from 'react-native';
import type { Props } from './SelectUnits.types';
import { useTheme } from 'styled-components/native';
import Icon from '../Icon';
import Typography from '../Typography';

const SelectUnits = ({ value, onSelectPress }: Props) => {
  const { baseColors, themed } = useTheme();
  return (
    <TouchableOpacity
      onPress={onSelectPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: baseColors.gray[200],
        borderRadius: 8,
        padding: 12,
        gap: 8,
      }}
    >
      <Typography variant="sm" sizeVariant="medium">
        {' '}
        {value ?? 1} un.{' '}
      </Typography>
      <Icon
        type="ChevronDownIcon"
        height={20}
        width={20}
        stroke={themed.text}
      />
    </TouchableOpacity>
  );
};

export default SelectUnits;
