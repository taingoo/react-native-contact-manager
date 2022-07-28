import {COLORS} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {handleRound, handleSquare} from '../shared';

const Image = ({
  source,
  width,
  height,
  tintColor,
  round,
  square,
  style,
  resizeMode = 'cover',
  ...rest
}) => {
  const imageStyle = [
    width && {width},
    height && {height},
    square && {...handleSquare(square)},
    round && {...handleRound(round)},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <FastImage
      {...rest}
      source={source}
      style={imageStyle}
      tintColor={COLORS[tintColor] ? COLORS[tintColor] : tintColor}
      resizeMode={FastImage.resizeMode[resizeMode]}
    />
  );
};

export default Image;
