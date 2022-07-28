import {ICONS} from '@assets';
import {
  Block,
  ContactCard,
  SectionListWrapper,
  Text,
  TextInput,
} from '@components';
import {useStore} from '@hooks';
import {convertToSectionList} from '@utils/helper';
import React, {useEffect} from 'react';
import SectionHeader from './components/SectionHeader';
import styles from './styles';
import useContact from './useContact';

const Contact = () => {
  const {dispatch, useSelector} = useStore();
  const {contacts} = useContact();

  useEffect(() => {
    if (contacts) {
      console.log(convertToSectionList(contacts));
    }
  }, [contacts]);

  const _renderItem = ({item}) => <ContactCard item={item} />;

  const _renderHeader = ({section: {title}}) => <SectionHeader title={title} />;

  const _renderFooter = () => (
    <Text lg center color="gray">
      {contacts.length} liên hệ
    </Text>
  );

  if (!contacts) return null;
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
        data={convertToSectionList(contacts)}
        renderItem={_renderItem}
        renderSectionHeader={_renderHeader}
        ListFooterComponent={_renderFooter}
      />
    </Block>
  );
};

export default Contact;
