import {Block} from '@components';
import {COLORS} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {UIActivityIndicator} from 'react-native-indicators';

const LoadMore = ({size = 20, color = COLORS.blue_300}) => {
  return (
    <Block marginVertical={20}>
      <UIActivityIndicator size={getSize.s(size)} color={color} />
    </Block>
  );
};

export default LoadMore;
