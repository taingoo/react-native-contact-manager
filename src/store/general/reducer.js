import * as actions from '@store/actions';
import produce from 'immer';
import * as common from './common';

const general = produce((state = common.INITIAL_GENERAL_STATE, action) => {
  switch (action.type) {
    case actions.SETUP_ENVIRONMENT:
      state.environment = action.payload.environment;
      return state;

    case actions.STORE_SESSION:
      state.session = action.payload.session || state.session;
      return state;

    case actions.TOGGLE_ACTIVITY_TRACKING:
      state.tracking = action.payload.tracking;
      return state;

    case actions.CHANGE_DEVICE_LOCALE:
      state.locale = action.payload.locale;
      return state;

    case actions.HIDE_ONBOARDING:
      state.isFirstLaunching = false;
      return state;

    case actions.STORE_DEVICE_TOKEN:
      state.deviceToken = action.payload.deviceToken;
      return state;

    case actions.STORE_APNS_TOKEN:
      state.apnsToken = action.payload.apnsToken;
      return state;

    case actions.STORE_VOIP_TOKEN:
      state.voipToken = action.payload.voipToken;
      return state;

    default:
      return state;
  }
});

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

const bottomTab = produce((state = {current: null}, action) => {
  switch (action.type) {
    case actions.SET_POSITION_BOTTOM_TAB:
      state.current = action.payload.current;
      return state;

    default:
      return state;
  }
});

const activity = produce((state = common.INITIAL_ACTIVITY_STATE, action) => {
  switch (action.type) {
    case actions.STORE_ACTIVITY_TRACKING:
      state.data = [...state.data, ...[action.payload]];
      return state;

    case actions.UPDATE_ACTIVITY_TRACKING:
      for (let i = state.data.length - 1; i >= 0; i--) {
        if (state.data[i].activityId === action.payload.activityId) {
          state.data[i].status = action.payload.status;
          state.data[i].error = action.payload.error;
        }
        break;
      }
      state.data = state.data;
      return state;

    default:
      return state;
  }
});

const sockjs = produce((state = {instance: null}, action) => {
  switch (action.type) {
    case actions.SOCKJS_INSTANCE:
      state.instance = action.instance;
      return state;

    default:
      return state;
  }
});

const eventbus = produce((state = {instance: null}, action) => {
  switch (action.type) {
    case actions.EVENTBUS_INSTANCE:
      state.instance = action.instance;
      return state;

    default:
      return state;
  }
});

export default {general, alert, bottomTab, activity, sockjs, eventbus};
