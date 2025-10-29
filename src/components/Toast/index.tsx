import { memo, useCallback, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { stylesByType, ToastContainer } from './Toast.styles';
import { useTheme } from 'styled-components/native';
import { useToast } from 'react-native-toast-notifications';
import Icon from '../Icon';
import Typography from '../Typography';
import type { ToastType } from './Toast.types';
import type { IconTypes } from '../Icon/Icon.types';
import FastImage from '@d11/react-native-fast-image';

const iconByType = {
  success: 'CheckIcon',
  error: 'AlertCircleIcon',
  warning: 'AlertIcon',
  notificationtoast: 'NotificationIcon',
} as const;

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

  const notificationToastStyle = useMemo(
    () => ({
      width: '80%' as const,
      padding: 12,
      backgroundColor: theme.baseColors.white,
      borderWidth: 1,
      borderColor: theme.baseColors.gray[200],
      borderRadius: 12,
      shadowColor: theme.baseColors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 40,
    }),
    [theme.baseColors.white, theme.baseColors.gray, theme.baseColors.black]
  );

  const separatorStyle = useMemo(
    () => ({
      height: 1,
      width: '100%' as const,
      backgroundColor: theme.baseColors.gray[200],
      marginVertical: 8,
    }),
    [theme.baseColors.gray]
  );

  const handleHideAll = useCallback(() => {
    toast.hideAll();
  }, [toast]);

  const styles = useMemo(() => stylesByType(theme)[type], [theme, type]);

  if (type === 'notificationtoast') {
    return (
      <TouchableOpacity onPress={handlePress} style={notificationToastStyle}>
        <View style={localStyles.headerRow}>
          <View style={localStyles.headerLeft}>
            <FastImage
              source={require('../../../assets/icon.png')}
              style={localStyles.icon}
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
        <View style={separatorStyle} />
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
    <ToastContainer
      activeOpacity={handlePress ? 0.3 : 1}
      onPress={handlePress}
      type={type}
    >
      <View>
        <Icon
          type={iconType ?? (iconByType[type] as IconTypes)}
          width={20}
          height={20}
          stroke={styles.titleColor}
          strokeWidth={2}
        />
      </View>
      <View style={localStyles.contentContainer}>
        <Typography
          variant="sm"
          sizeVariant="semiBold"
          color={styles.titleColor}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="2xs" sizeVariant="regular" color="white">
            {description}
          </Typography>
        )}
      </View>
      <TouchableOpacity style={localStyles.closeButton} onPress={handleHideAll}>
        <Icon
          type="CancelIcon"
          width={20}
          height={20}
          stroke={styles.titleColor}
          viewBox="0 0 20 20"
          strokeWidth={1.5}
        />
      </TouchableOpacity>
    </ToastContainer>
  );
};

const localStyles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'center',
  },
});

export default memo(ToastCustom);
