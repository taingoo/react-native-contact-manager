import * as actions from '@store/actions';
import produce from 'immer';
import * as common from './common';

const alert = produce((state = common.INITIAL_ALERT_STATE, action) => {
  switch (action.type) {
    case actions.SHOW_ALERT:
      state.isShowAlert = true;
      state.title = action?.customProps?.title ? action.customProps.title : '';
      state.message = action?.customProps?.message
        ? action.customProps.message
        : '';
      state.cancelable = action?.cancelable ? action.cancelable : null;
      state.canBackdropPress = action?.canBackdropPress
        ? action.canBackdropPress
        : null;
      state.cancelText = action?.customProps?.cancelText
        ? action.customProps.cancelText
        : null;
      state.submitText = action?.customProps?.submitText
        ? action.customProps.submitText
        : null;
      state.onCancel = action?.onCancel;
      state.onSubmit = action?.onSubmit;
      return state;

    case actions.HIDE_ALERT:
      state.isShowAlert = false;
      return state;

    default:
      return state;
  }
});

export default {alert};
