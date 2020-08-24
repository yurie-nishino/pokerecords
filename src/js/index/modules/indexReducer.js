import { handleActions } from 'redux-actions'; //reduxとアクションを結びつけてる
import * as TYPES from '../../constants/actionTypes';

const initialState = {
  status: {
    isPushed: false,
  },
};

const reducer = handleActions(
  {
    [TYPES.INDEX_BUTTON_PUSH]: (state) => {
      console.log('-------')
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