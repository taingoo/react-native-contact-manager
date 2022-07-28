import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rippleCircle: color => ({
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: getSize.s(50),
    backgroundColor: color,
    position: 'absolute',
  }),
});
