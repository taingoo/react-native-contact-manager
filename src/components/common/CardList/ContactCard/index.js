import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {ADD_TO_FAVORITE} from '@store/actions';
import {COLORS} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const ContactCard = ({item}) => {
  const {dispatch} = useStore();
  const {displayName, recordID, isFavorite} = item;

  const _addToFavourite = () => {
    dispatch({type: ADD_TO_FAVORITE, payload: {recordID}});
  };

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
        <Pressable
          hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
          onPress={_addToFavourite}>
          <Image
            source={ICONS.star}
            square={22}
            tintColor={isFavorite ? COLORS.yellow_300 : COLORS.gray}
          />
        </Pressable>
      </Block>
    </Pressable>
  );
};

export default ContactCard;
