import {Block, Text} from '@components';
import {useStore} from '@hooks';
import React from 'react';

const ContactDetails = () => {
  const {dispatch, useSelector} = useStore();

  return (
    <Block>
      <Text />
    </Block>
  );
};

export default ContactDetails;
