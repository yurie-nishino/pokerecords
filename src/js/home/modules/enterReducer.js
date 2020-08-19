import { handleActions } from 'redux-actions';
import * as TYPES from '../../constants/actionTypes';

const initialState = {
  status: {
    isPushed: false,
  },
};

const reducer = handleActions(
  {
    [TYPES.ENTER_BUTTON_PUSH]: (state) => {
      const result = {
        ...state,
        status: {
          ...state.isPushed,
          isPushed: !state.status.isPushed,
        },
      };
      return result;
    },
  },
  initialState,
);

export default reducer;
