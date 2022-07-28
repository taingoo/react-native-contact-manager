import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnBack: {
    position: 'absolute',
    height: getSize.s(42),
    width: getSize.s(52),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
  },
  iconBack: {
    height: getSize.s(16),
    width: getSize.s(16),
  },
});
