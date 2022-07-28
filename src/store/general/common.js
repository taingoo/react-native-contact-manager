export const INITIAL_GENERAL_STATE = {
  environment: null,
  session: '',
  tracking: false,
  deviceToken: '',
  apnsToken: '',
  voipToken: '',
  locale: 'vi',
  isFirstLaunching: true,
};

export const INITIAL_ALERT_STATE = {
  isShowAlert: false,
  title: '',
  message: '',
  cancelable: true,
  canBackdropPress: true,
  cancelText: '',
  submitText: '',
  onCancel: () => {},
  onSubmit: () => {},
};

export const INITIAL_ACTIVITY_STATE = {data: []};
