import {
  SEARCH_CONTACT,
  STORE_CONTACT,
  TOGGLE_FAVORITE,
  _onUnmount,
} from '@store/actions';
import {convertToSectionList, removeAccent} from '@utils/helper';
import produce from 'immer';

const INITIAL_STATE = {
  origin: null,
  data: null,
  temp: null,
  isLoading: false,
};

const contact = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_CONTACT:
      state.origin = action.payload;
      state.data = convertToSectionList(action.payload);
      return state;

    case TOGGLE_FAVORITE:
      let abort = false;
      for (let i = 0; i < state.data?.length; i++) {
        for (let j = 0; j < state.data[i].data.length; j++) {
          if (state.data[i].data[j].recordID === action.payload.recordID) {
            state.data[i].data[j].isFavorite =
              !state.data[i].data[j].isFavorite;
            abort = true;
            break;
          }
        }
        if (abort) break;
      }
      return state;

    case SEARCH_CONTACT:
      state.temp = state.origin?.filter(
        item =>
          removeAccent(item.displayName).indexOf(
            removeAccent(action.payload.keyword),
          ) > -1,
      );
      return state;

    case _onUnmount(STORE_CONTACT):
      return INITIAL_STATE;

    default:
      return state;
  }
});

export default {contact};
