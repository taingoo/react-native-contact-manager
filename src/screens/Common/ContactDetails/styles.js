import {COLORS} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  common: {
    borderRadius: getSize.s(12),
    width: width - getSize.s(32),
    padding: getSize.m(12),
    marginHorizontal: getSize.m(16),
    backgroundColor: COLORS.gray,
  },
});
