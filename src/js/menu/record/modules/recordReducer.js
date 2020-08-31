import { handleActions } from 'redux-actions'; //reduxとアクションを結びつけてる
import * as TYPES from '../../../constants/actionTypes';

const initialState = {
  status: {
    isPushed: false,
  },
};

//recordボタンのアクション結果を返す
const reducer = handleActions(
  {
    [TYPES.RECORD_BUTTON_PUSH]: (state) => {
      console.log('state');
      console.log(state);
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
