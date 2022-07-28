import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useBackHandler = ({enabled, callback = () => {}}) => {
  useEffect(() => {
    const backHandler = () => {
      callback();
      return true;
    };

    if (enabled) {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [enabled, callback]);
};

export default useBackHandler;
