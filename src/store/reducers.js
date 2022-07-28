import contactReducer from '@screens/Bottom/Contact/reducer';
import {combineReducers} from 'redux';
import generalReducer from './general/reducer';

const rootReducer = combineReducers({
  ...generalReducer,
  ...contactReducer,
});

export default rootReducer;
