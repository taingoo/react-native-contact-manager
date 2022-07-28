import {_onComplete} from '@store/actions';
import {ErrorToast} from '@utils/toast';
import {call, put} from 'redux-saga/effects';

const OPTION = {
  title: null,
  message: null,
  isToast: true,
  callback: () => {},
};

export const safe = (saga, config = OPTION) =>
  function* (action) {
    try {
      yield call(saga, action);
    } catch (error) {
      if (config.message) {
        ErrorToast({title: config.title, message: config.message});
      } else {
        config.isToast &&
          ErrorToast({
            title: 'API Failed',
            message: `${action.type} (${error.response?.status})`,
          });
      }
      if (config.callback) {
        config.callback();
      }
    } finally {
      yield put({type: _onComplete(action?.type)});
    }
  };
