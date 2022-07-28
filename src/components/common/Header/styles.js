import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnBack: {
    height: getSize.s(42),
    width: getSize.s(52),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBack: {
    height: getSize.s(18),
    width: getSize.s(18),
  },
});
