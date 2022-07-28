import {ICONS} from '@assets';
import {
  Block,
  ContactCard,
  Image,
  ListWrapper,
  SectionListWrapper,
  Text,
  TextInput,
} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {SEARCH_CONTACT, STORE_CONTACT} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import SectionHeader from './components/SectionHeader';
import styles from './styles';
import useContact from './useContact';

const Contact = () => {
  const {dispatch, useSelector} = useStore();
  const {contacts} = useContact();
  const {data, temp} = useSelector('contact');
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    if (contacts) {
      dispatch({type: STORE_CONTACT, payload: contacts});
    }
  }, [contacts, dispatch]);

  useEffect(() => {
    if (keyword) {
      dispatch({type: SEARCH_CONTACT, payload: {keyword}});
    }
  }, [dispatch, keyword]);

  const _renderItem = ({item}) => (
    <Pressable
      onPress={() => navigate(routes.CONTACT_DETAILS_SCREEN, {contact: item})}>
      <Block
        justifyCenter
        height={50}
        borderBottomWidth={0.5}
        borderColor="gray">
        <Text>{item.displayName}</Text>
      </Block>
    </Pressable>
  );

  const _renderSectionItem = ({item}) => <ContactCard item={item} />;

  const _renderHeader = ({section: {title}}) => <SectionHeader title={title} />;

  const _renderFooter = () => (
    <Text lg center color="gray">
      {data.length} liên hệ
    </Text>
  );

  const _rightIcon = () => {
    return keyword ? (
      <Pressable onPress={() => setKeyword(null)}>
        <Block alignCenter justifyCenter square={24} marginRight={8}>
          <Image source={ICONS.clear_input} square={18} tintColor="gray_300" />
        </Block>
      </Pressable>
    ) : null;
  };

  if (!data) return null;
  return (
    <Block flex safeBottom padding={24} backgroundColor="black">
      <Text md center type="semibold">
        Liên hệ
      </Text>
      <TextInput
        placeholder="Tìm kiếm"
        leftIcon={ICONS.search}
        rightIcon={_rightIcon}
        onChangeText={text => setKeyword(text)}
        inputStyle={styles.inputStyle}
        value={keyword}
      />
      {keyword ? (
        <>
          <Text sm color="gray_500">
            TÊN PHÙ HỢP HÀNG ĐẦU
          </Text>
          <ListWrapper data={temp} renderItem={_renderItem} />
        </>
      ) : (
        <SectionListWrapper
          stickySectionHeadersEnabled
          data={data}
          renderItem={_renderSectionItem}
          renderSectionHeader={_renderHeader}
          ListFooterComponent={_renderFooter}
        />
      )}
    </Block>
  );
};

export default Contact;
