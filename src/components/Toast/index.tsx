import { TouchableOpacity, View } from 'react-native';
import { stylesByType, ToastContainer } from './Toast.styles';
import { useTheme } from 'styled-components/native';
import { useToast } from 'react-native-toast-notifications';
import Icon from '../Icon';
import Typography from '../Typography';
import type { ToastType } from './Toast.types';
import type { IconTypes } from '../Icon/Icon.types';
import FastImage from '@d11/react-native-fast-image';

const ToastCustom = ({
  type,
  title,
  description,
  iconType,
  handlePress,
}: {
  type: ToastType;
  title: string;
  description?: string;
  iconType?: IconTypes;
  handlePress?: () => void;
}) => {
  const theme = useTheme();
  const toast = useToast();

  const iconByType = {
    success: 'CheckIcon',
    error: 'AlertCircleIcon',
    warning: 'AlertIcon',
    notificationtoast: 'NotificationIcon',
  };

  if (type === 'notificationtoast') {
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={{
          width: '80%',
          padding: 12,
          backgroundColor: theme.colors.white,
          borderWidth: 1,
          borderColor: theme.colors.gray[200],
          borderRadius: 12,
          shadowColor: theme.colors.black,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.18,
          shadowRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <FastImage
              source={require('../../../assets/icon.png')}
              style={{ width: 28, height: 28, borderRadius: 10 }}
            />
            <Typography sizeVariant="semiBold" variant="sm">
              Nova notificação
            </Typography>
          </View>
          <Icon
            type="CancelIcon"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            strokeWidth={1.5}
          />
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: theme.colors.gray[200],
            marginVertical: 8,
          }}
        />
        <Typography variant="sm" sizeVariant="semiBold">
          {title}
        </Typography>
        {description && (
          <Typography variant="xs" sizeVariant="regular">
            {description}
          </Typography>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <ToastContainer type={type}>
      <View>
        <Icon
          type={iconType ?? (iconByType[type] as IconTypes)}
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
