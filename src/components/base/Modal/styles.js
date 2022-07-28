import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  content: position => ({
    flex: 1,
    justifyContent: position === 'center' ? 'center' : 'flex-end',
    paddingHorizontal: position === 'center' ? getSize.m(24) : 0,
  }),
});
