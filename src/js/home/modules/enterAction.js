import { createAction } from 'redux-actions';
import * as TYPES from '../../constants/actionTypes';

export default {
  pushEnter: createAction(TYPES.ENTER_BUTTON_PUSH),
};
