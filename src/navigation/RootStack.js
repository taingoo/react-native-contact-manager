import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {bottom, common} from '@screens';
import React from 'react';
import routes from './routes';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={routes.CONTACT_SCREEN}
          component={bottom[routes.CONTACT_SCREEN]}
        />
        <Stack.Screen
          name={routes.CONTACT_DETAILS_SCREEN}
          component={common[routes.CONTACT_DETAILS_SCREEN]}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;
