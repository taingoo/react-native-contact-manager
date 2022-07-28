import {Block} from '@components';
import {COLORS} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Modal} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';

const Loading = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Block flex justifyCenter alignCenter backgroundColor="rgba(0,0,0,0.1)">
        <Block square={70} radius={5} backgroundColor="rgba(0,0,0,0.7)">
          <UIActivityIndicator size={getSize.s(35)} color={COLORS.white} />
        </Block>
      </Block>
    </Modal>
  );
};

export default Loading;
