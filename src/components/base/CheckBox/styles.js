import {COLORS} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: (borderColor, scale, width) => ({
    borderColor,
    transform: [{scale}],
    width: getSize.s(width),
    height: getSize.s(width),
    padding: getSize.m(5),
    borderRadius: getSize.s(5),
    borderWidth: getSize.m(2),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  }),
  icon: width => ({
    width: getSize.s(width - 5),
    height: getSize.s(width - 5),
    resizeMode: 'contain',
    zIndex: 20,
  }),
  background: (widthIcon, activeColor) => ({
    width: widthIcon,
    height: widthIcon,
    backgroundColor: activeColor,
    position: 'absolute',
  }),
});
