import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

/**
 * Resolution of iPhone X
 */
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

const WIDTH = width > height ? height : width;
const HEIGHT = width > height ? width : height;

const scale = size => {
  return (WIDTH / DESIGN_WIDTH) * size;
};

const verticalScale = size => {
  return (HEIGHT / DESIGN_HEIGHT) * size;
};

const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

/**
 * @description
 *
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 **/

export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};
