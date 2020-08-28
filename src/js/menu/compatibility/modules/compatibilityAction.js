import { createAction } from 'redux-actions';
import * as TYPES from '../../../constants/actionTypes';

//記録ボタンが押されたらTYPES.ENTER_BUTTON_PUSHが発火！constantsに宣言されてる
//JSXのイベント名を定義
export default {
  pushCompatibility: createAction(TYPES.COMPATIBILITY_BUTTON_PUSH),
};
