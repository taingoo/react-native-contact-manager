import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import React from 'react';

const ContactCard = ({item}) => {
  const {displayName} = item;

  return (
    <Block
      row
      alignCenter
      justifyCenter
      height={40}
      paddingBottom={12}
      borderBottomWidth={0.5}
      borderColor="gray"
      space="between">
      <Text type="semibold">{displayName}</Text>
      <Image source={ICONS.star} square={22} tintColor="gray" />
    </Block>
  );
};

export default ContactCard;
