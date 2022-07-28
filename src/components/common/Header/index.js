import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack, reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
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
      row
      alignCenter
      paddingTop={top}
      height={top + 52}
      backgroundColor="black">
      {(canGoBack || onGoBack) && (
        <Pressable onPress={_handleGoBack} style={styles.btnBack}>
          <Image
            source={ICONS.arrow_left}
            style={styles.iconBack}
            tintColor="blue"
          />
        </Pressable>
      )}
      <Text md numberOfLines={1} color="blue" type="semibold">
        {title}
      </Text>
    </Block>
  );
};

export default Header;
