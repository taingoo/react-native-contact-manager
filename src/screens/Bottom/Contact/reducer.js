import {ADD_TO_FAVORITE, STORE_CONTACT, _onUnmount} from '@store/actions';
import produce from 'immer';

const INITIAL_STATE = {data: null, error: null, isLoading: false};

const contact = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_CONTACT:
      state.data = action.payload;
      return state;

    case _onUnmount(STORE_CONTACT):
      return INITIAL_STATE;

    case ADD_TO_FAVORITE:
      for (let i = 0; i < state.data?.length; i++) {
        for (let j = 0; j < state.data[i].data.length; j++) {
          if (state.data[i].data[j].recordID === action.payload.recordID) {
            state.data[i].data[j].isFavorite =
              !state.data[i].data[j].isFavorite;
            break;
          }
        }
      }
      return state;

    default:
      return state;
  }
});

export default {contact};
