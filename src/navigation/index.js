import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';
import {navigationRef} from './NavigationServices';
import RootStack from './RootStack';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
