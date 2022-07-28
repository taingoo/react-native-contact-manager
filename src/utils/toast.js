import i18n from '@i18n';
import {COLORS, FONTS} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import Toast from 'react-native-simple-toast';
import ToastMessage, {
  BaseToast,
  ErrorToast as RNErrorToast,
} from 'react-native-toast-message';
import {isIos} from './helper';
import {getSize, width} from './responsive';

export const SimpleToast = string => Toast.show(string);

export const SuccessToast = ({title, message}) => {
  ToastMessage.show({
    type: 'success',
    text1: title || i18n.t('common.notification'),
    text2: message,
    visibilityTime: 3000,
  });
};

export const ErrorToast = ({title, message}) => {
  ToastMessage.show({
    type: 'error',
    text1: title || i18n.t('common.notification'),
    text2: message,
    visibilityTime: 3000,
  });
};

export const config = {
  success: props => (
    <BaseToast
      {...props}
      text1Style={styles.textStyle}
      text2Style={styles.textStyle}
      style={{...styles.containerStyle, borderLeftColor: COLORS.success}}
      contentContainerStyle={styles.contentContainerStyle}
    />
  ),
  error: props => (
    <RNErrorToast
      {...props}
      text1Style={styles.textStyle}
      text2Style={styles.textStyle}
      style={{...styles.containerStyle, borderLeftColor: COLORS.error}}
      contentContainerStyle={styles.contentContainerStyle}
    />
  ),
};

const styles = StyleSheet.create({
  containerStyle: {
    width: width - 32,
    borderLeftWidth: getSize.s(8),
    alignItems: 'center',
    marginTop: !isIos ? getSize.m(-20) : 0,
  },
  contentContainerStyle: {
    paddingHorizontal: getSize.m(16),
  },
  textStyle: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.fontFamily.regular,
    color: COLORS.text,
  },
});
