import { createAction } from 'redux-actions';
import * as TYPES from '../../constants/actionTypes';

//エンターボタンが押されたらTYPES.ENTER_BUTTON_PUSHが発火！constantsに宣言されてる
export default {
  pushEnter: createAction(TYPES.ENTER_BUTTON_PUSH),
};
