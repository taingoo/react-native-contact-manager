import {COLORS, FONTS} from '@theme';
import {getSize} from '@utils/responsive';
import {isEmpty} from 'lodash';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Block from '../Block';
import Image from '../Image';
import Text from '../Text';
import styles from './styles';

const TextInput = (props, ref) => {
  const {
    label,
    labelStyle,
    containerInputStyle,
    autoCapitalize = 'none',
    type = 'regular',
    color = 'text',
    borderColor = 'primary',
    size = 14,
    isSecure,
    rightIcon,
    leftIcon,
    leftIconStyle,
    isMultiColorIcon = false,
    height,
    maxLength,
    inputStyle,
    errorText,
    isDirty,
    isError,
    onFocus,
    onBlur,
    required,
    disabled,
    errorContainerStyle,
    ...inputProps
  } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [secureEye, setSecureEye] = useState(true);

  const textStyle = [
    styles.resetStyles,
    color && {color: COLORS[color]},
    color && !COLORS[color] && {color: color},
    styles.defaultStyles,
    {fontFamily: FONTS.fontFamily[type]},
    isSecure && {paddingRight: getSize.m(50)},
    rightIcon && {paddingRight: getSize.m(16)},
    leftIcon && {paddingLeft: getSize.m(38)},
    {fontSize: getSize.m(size)},
    height && {height: getSize.s(height)},
    {...StyleSheet.flatten(inputProps.style)},
  ];

  useImperativeHandle(ref, () => ({
    focus: () => {
      ref?.current?.focus();
    },
  }));

  const _renderSecureIcon = () => {
    return (
      <TouchableOpacity
        style={styles.rightIcon}
        hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
        onPress={() => setSecureEye(!secureEye)}>
        <FontAwesomeIcon
          name={secureEye ? 'eye' : 'eye-slash'}
          color={COLORS.placeholder}
          size={getSize.m(16)}
        />
      </TouchableOpacity>
    );
  };

  const _renderLabel = () => (
    <Text marginBottom={5} style={labelStyle}>
      {label} {required && <Text color="red">*</Text>}
    </Text>
  );

  const _renderError = () => (
    <Block row alignCenter paddingVertical={3} style={errorContainerStyle}>
      <Ionicons name="ios-warning" color={COLORS.error} size={getSize.m(13)} />
      <Text sm marginLeft={6} color={COLORS.error}>
        {errorText}
      </Text>
    </Block>
  );

  const _onFocus = e => {
    setIsFocus(!isFocus);
    onFocus && onFocus(e);
  };

  const _onBlur = e => {
    setIsFocus(!isFocus);
    onBlur && onBlur(e);
  };

  const _renderInput = () => {
    return (
      <RNTextInput
        ref={ref}
        autoCorrect={false}
        allowFontScaling={false}
        placeholder={!isEmpty(label) && leftIcon ? props.placeholder : ''}
        placeholderTextColor={COLORS.placeholder}
        underlineColorAndroid="transparent"
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureEye && isSecure}
        maxLength={maxLength}
        style={textStyle}
        editable={!disabled}
        onFocus={_onFocus}
        onBlur={_onBlur}
        {...inputProps}
      />
    );
  };

  const _getBorderColor = () => {
    if (isError) {
      return COLORS.error;
    }
    if (isFocus && isDirty) {
      return COLORS.success;
    }
    if (isFocus && !isDirty) {
      return borderColor;
    }
    return COLORS.gray_300;
  };

  return (
    <Block flexShrink style={containerInputStyle}>
      {!isEmpty(label) && _renderLabel()}
      <Block
        radius={7}
        borderWidth={1}
        backgroundColor={isFocus ? _getBorderColor() : 'transparent'}
        borderColor={isFocus ? _getBorderColor() : 'transparent'}>
        <Block
          style={[
            styles.inputContainer,
            {
              borderColor: _getBorderColor(),
              backgroundColor: disabled ? COLORS.gray_100 : COLORS.white,
              borderWidth: disabled ? getSize.s(0) : getSize.s(1),
            },
            StyleSheet.flatten(inputStyle),
          ]}>
          {leftIcon && (
            <Image
              source={leftIcon}
              tintColor={
                !isMultiColorIcon
                  ? isError
                    ? COLORS.error
                    : COLORS.placeholder
                  : {}
              }
              style={[styles.leftIcon, leftIconStyle]}
              resizeMode="contain"
            />
          )}
          {_renderInput()}
          {isSecure ? _renderSecureIcon() : rightIcon && rightIcon()}
        </Block>
      </Block>
      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
};

export default forwardRef(TextInput);
