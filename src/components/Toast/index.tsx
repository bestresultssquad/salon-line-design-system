import { TouchableOpacity, View } from 'react-native';
import { stylesByType, ToastContainer } from './Toast.styles';
import { useTheme } from 'styled-components/native';
import { useToast } from 'react-native-toast-notifications';
import Icon from '../Icon';
import Typography from '../Typography';
import type { ToastType } from './Toast.types';
import type { IconTypes } from '../Icon/Icon.types';

const ToastCustom = ({
  type,
  title,
  description,
}: {
  type: ToastType;
  title: string;
  description?: string;
}) => {
  const theme = useTheme();
  const toast = useToast();

  const iconByType = {
    success: 'CheckIcon',
    error: 'AlertCircleIcon',
    warning: 'AlertIcon',
  };

  return (
    <ToastContainer type={type}>
      <View>
        <Icon
          type={iconByType[type] as IconTypes}
          width={20}
          height={20}
          stroke={stylesByType(theme)[type].titleColor}
          strokeWidth={2}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Typography
          variant="sm"
          sizeVariant="semiBold"
          color={stylesByType(theme)[type].titleColor}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="2xs" sizeVariant="regular" color="white">
            {description}
          </Typography>
        )}
      </View>
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() => toast.hideAll()}
      >
        <Icon
          type="CancelIcon"
          width={20}
          height={20}
          stroke={stylesByType(theme)[type].titleColor}
          viewBox="0 0 20 20"
          strokeWidth={1.5}
        />
      </TouchableOpacity>
    </ToastContainer>
  );
};

export default ToastCustom;
