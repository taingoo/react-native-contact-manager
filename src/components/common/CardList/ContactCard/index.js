import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {TOGGLE_FAVORITE} from '@store/actions';
import {COLORS} from '@theme';
import {SimpleToast} from '@utils/toast';
import React from 'react';
import {Pressable} from 'react-native';

const ContactCard = ({item}) => {
  const {dispatch} = useStore();
  const {displayName, recordID, isFavorite} = item;
  let favorited = isFavorite;

  const _toggleFavourite = () => {
    favorited = !favorited;
    if (favorited) SimpleToast('Đã thêm vào danh sách yêu thích');
    dispatch({type: TOGGLE_FAVORITE, payload: {recordID}});
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
          hitSlop={{left: 8, right: 8, bottom: 8, top: 8}}
          onPress={_toggleFavourite}>
          <Image
            source={ICONS.star}
            square={22}
            tintColor={favorited ? COLORS.yellow_300 : COLORS.gray}
          />
        </Pressable>
      </Block>
    </Pressable>
  );
};

export default ContactCard;
