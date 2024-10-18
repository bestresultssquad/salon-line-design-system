import { TouchableOpacity, View } from 'react-native';
import { stylesByType, ToastContainer } from './Toast.styles';
import { useTheme } from 'styled-components/native';
import { useToast } from 'react-native-toast-notifications';
import Icon from '../Icon';
import Typography from '../Typography';
import type { ToastType } from './Toast.types';

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

  return (
    <ToastContainer type={type}>
      <View>
        <Icon
          type="AlertIcon"
          width={20}
          height={20}
          stroke={stylesByType(theme)[type].titleColor}
          strokeWidth={1.5}
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
          <Typography variant="2xs" sizeVariant="regular" color="black">
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
