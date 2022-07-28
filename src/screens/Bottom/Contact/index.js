import {Block, Text} from '@components';
import {useStore} from '@hooks';
import React from 'react';

const Contact = () => {
  const {dispatch, useSelector} = useStore();

  return (
    <Block>
      <Text />
    </Block>
  );
};

export default Contact;
