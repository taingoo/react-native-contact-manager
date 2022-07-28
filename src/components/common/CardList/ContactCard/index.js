import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import React from 'react';
import {Pressable} from 'react-native';

const ContactCard = ({item}) => {
  const {displayName} = item;

  return (
    <Pressable
      onPress={() => navigate(routes.CONTACT_DETAILS_SCREEN, {contact: item})}>
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
    </Pressable>
  );
};

export default ContactCard;
