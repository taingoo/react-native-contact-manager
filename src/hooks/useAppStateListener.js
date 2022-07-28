import {useCallback, useEffect, useRef} from 'react';
import {AppState} from 'react-native';

const useAppStateListener = ({callback}) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      _handleAppStateChange,
    );

    return () => subscription.remove();
  }, [_handleAppStateChange]);

  const _handleAppStateChange = useCallback(
    nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        callback && callback();
      }
      appState.current = nextAppState;
    },
    [callback],
  );

  return {};
};

export default useAppStateListener;
