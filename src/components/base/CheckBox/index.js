import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {COLORS} from '@theme';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, View} from 'react-native';
import styles from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

const CheckBox = ({
  title,
  value,
  setValue,
  width = 24,
  activeColor = COLORS.green_500,
  onPress,
  labelStyles,
  containerStyles,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.stopAnimation();
    if (value) {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(1);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  }, [animatedValue, setValue, value]);

  const _onChange = () => {
    onPress && onPress();
    setValue && setValue(prev => !prev);
  };

  const borderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.smoke, activeColor],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  const widthIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width],
  });

  return (
    <Block style={containerStyles} row alignCenter>
      <AnimatedPressable
        style={styles.button(borderColor, scale, width)}
        onPress={_onChange}>
        <Image
          source={ICONS.checkbox}
          tintColor={COLORS.white}
          style={styles.icon(width)}
        />
        <AnimatedView style={styles.background(widthIcon, activeColor)} />
      </AnimatedPressable>
      {title && (
        <Block flex marginLeft={10}>
          <Text style={labelStyles} type="bold">
            {title}
          </Text>
        </Block>
      )}
    </Block>
  );
};

export default CheckBox;
