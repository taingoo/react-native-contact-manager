import MainContainer from '@navigation';
import store from '@store';
import {isIos} from '@utils/helper';
import React from 'react';
import {UIManager} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <MainContainer />
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
