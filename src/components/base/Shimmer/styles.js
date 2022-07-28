import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (
    width,
    height,
    radius,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    colors,
  ) => ({
    width: width,
    height: height,
    borderRadius: getSize.s(radius),
    marginVertical: getSize.m(marginVertical),
    marginHorizontal: getSize.m(marginHorizontal),
    marginTop: getSize.m(marginTop),
    marginBottom: getSize.m(marginBottom),
    marginLeft: getSize.m(marginLeft),
    marginRight: getSize.m(marginRight),
    backgroundColor: colors ? colors[0] : '#E6E6E6',
    overflow: 'hidden',
  }),
});
