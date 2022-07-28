import {ICONS} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {goBack, reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = ({canGoBack, title, onGoBack}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _handleGoBack = () =>
    onGoBack
      ? onGoBack()
      : navigation.canGoBack()
      ? goBack()
      : reset(0, routes.BOTTOM_TAB);

  return (
    <Block
      alignCenter
      justifyCenter
      paddingTop={top}
      height={top + 42}
      backgroundColor="primary">
      {(canGoBack || onGoBack) && (
        <Pressable
          event="go_back"
          onPress={_handleGoBack}
          style={styles.btnBack}>
          <Image
            source={ICONS.arrow_left}
            style={styles.iconBack}
            tintColor="white"
          />
        </Pressable>
      )}
      <Text center numberOfLines={1} color="white" type="semibold">
        {title}
      </Text>
    </Block>
  );
};

export default Header;
