import {ICONS} from '@assets';
import {Block, FormContainer, Header, Image, Text} from '@components';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Linking, Pressable} from 'react-native';
import styles from './styles';

const ContactDetails = ({route}) => {
  const {contact} = route.params;
  const {displayName, phoneNumbers, emailAddresses} = contact;

  const _rennderActionButton = ({icon, label, tintColor = 'blue'}) => (
    <Block
      radius={12}
      alignCenter
      justifyCenter
      width={(width - 32 - 36) / 4}
      height={(width - 32 - 36) / 4.5}
      backgroundColor="gray">
      <Image source={icon} square={20} tintColor={tintColor} />
      <Text sm color={tintColor}>
        {label}
      </Text>
    </Block>
  );

  return (
    <Block flex backgroundColor="black">
      <Header canGoBack title="Liên hệ" />
      <FormContainer>
        <Block alignCenter padding={24}>
          <Block
            alignCenter
            justifyCenter
            round={100}
            marginBottom={12}
            backgroundColor="gray_600">
            <Text xl type="bold">
              {displayName.charAt(0)}
            </Text>
          </Block>
          <Text xl>{displayName}</Text>
        </Block>
        <Block row paddingHorizontal={16} space="between">
          {_rennderActionButton({icon: ICONS.message, label: 'nhắn tin'})}
          {_rennderActionButton({icon: ICONS.phone, label: 'gọi'})}
          {_rennderActionButton({icon: ICONS.video, label: 'video'})}
          {_rennderActionButton({
            icon: ICONS.email,
            label: 'gửi thư',
            tintColor: emailAddresses?.length ? 'blue' : 'gray_700',
          })}
        </Block>
        {!!phoneNumbers?.length && (
          <Block
            radius={12}
            width={width - 32}
            margin={16}
            backgroundColor="gray">
            {phoneNumbers.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => Linking.openURL(`tel:${item.number}`)}>
                <Block padding={12}>
                  <Text marginBottom={4}>di động</Text>
                  <Text md color="blue">
                    {item.number}
                  </Text>
                </Block>
              </Pressable>
            ))}
          </Block>
        )}
        {!!emailAddresses?.length && (
          <Block
            radius={12}
            width={width - 32}
            marginBottom={16}
            marginHorizontal={16}
            backgroundColor="gray">
            {emailAddresses.map((item, index) => (
              <Block key={index} padding={12}>
                <Text marginBottom={4}>email</Text>
                <Text md color="blue">
                  {item.email}
                </Text>
              </Block>
            ))}
          </Block>
        )}
        <Block style={{...styles.common, height: getSize.s(120)}}>
          <Text>Ghi chú</Text>
        </Block>
        <Block style={{...styles.common, marginVertical: getSize.m(16)}}>
          <Text md color="blue">
            Gửi tin nhắn
          </Text>
          <Block height={0.5} marginVertical={12} backgroundColor="gray_700" />
          <Text md color="blue">
            Chia sẻ liên hệ
          </Text>
          <Block height={0.5} marginVertical={12} backgroundColor="gray_700" />
          <Text md color="blue">
            Thêm vào Mục ưa thích
          </Text>
        </Block>
        <Block style={styles.common}>
          <Text md color="blue">
            Thêm vào liên hệ khẩn cấp
          </Text>
        </Block>
        <Block style={{...styles.common, marginVertical: getSize.m(16)}}>
          <Text md color="blue">
            Chia sẻ vị trí của tôi
          </Text>
        </Block>
      </FormContainer>
    </Block>
  );
};

export default ContactDetails;
