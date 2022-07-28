import {ICONS} from '@assets';
import {
  Block,
  ContactCard,
  SectionListWrapper,
  Text,
  TextInput,
} from '@components';
import {useStore} from '@hooks';
import {STORE_CONTACT} from '@store/actions';
import {convertToSectionList} from '@utils/helper';
import React, {useEffect} from 'react';
import SectionHeader from './components/SectionHeader';
import styles from './styles';
import useContact from './useContact';

const Contact = () => {
  const {dispatch, useSelector} = useStore();
  const {contacts} = useContact();
  const {data} = useSelector('contact');

  useEffect(() => {
    if (contacts) {
      dispatch({type: STORE_CONTACT, payload: convertToSectionList(contacts)});
    }
  }, [contacts, dispatch]);

  const _renderItem = ({item}) => <ContactCard item={item} />;

  const _renderHeader = ({section: {title}}) => <SectionHeader title={title} />;

  const _renderFooter = () => (
    <Text lg center color="gray">
      {data.length} liên hệ
    </Text>
  );

  if (!data) return null;
  return (
    <Block flex safeBottom padding={24} backgroundColor="black">
      <Text md center type="semibold">
        Liên hệ
      </Text>
      <TextInput
        placeholder="Tìm kiếm"
        leftIcon={ICONS.search}
        inputStyle={styles.inputStyle}
      />
      <SectionListWrapper
        stickySectionHeadersEnabled
        data={data}
        renderItem={_renderItem}
        renderSectionHeader={_renderHeader}
        ListFooterComponent={_renderFooter}
      />
    </Block>
  );
};

export default Contact;
