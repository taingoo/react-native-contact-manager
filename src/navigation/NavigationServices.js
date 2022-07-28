import {CommonActions, StackActions} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef();

export function navigate(name, params, key) {
  if (key) {
    navigationRef.current?.dispatch(
      CommonActions.navigate({key, name, params}),
    );
    return;
  }
  navigationRef.current?.dispatch(CommonActions.navigate({name, params}));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(count) {
  navigationRef.current?.dispatch(StackActions.pop(count));
}

export function reset(index, name, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({index, routes: [{name, params}]}),
  );
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name;
}

export default {
  navigate,
  push,
  replace,
  pop,
  popToTop,
  reset,
  getCurrentRoute,
  navigationRef,
};
