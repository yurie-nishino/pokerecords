import { connect } from 'react-redux';
import ACTIONS from '../record/modules/recordAction';
import Menu from '../component/Menu';

//ポケモン一覧（pokeIndex）
function mapStateToProps(state) {
  return {
    isPushRecord: state.record.status.isPushed,
    isPushIndex: state.index.status.isPushed,
  }
}
// isPushRecordは、recordReducerの処理を返す。stateの中のrecord（mainReducer）のstatus(状態)がisPushed（）のTrue or Falseの状態を返す
//Menuでstateの結果を扱えるようにし、trueの際に＜Forms /＞へ画面遷移するようにしている

function mapDispatchToProps(dispatch) {
    return {
    // pushEnter: () => dispatch(ACTIONS.pushEnter()),
    pushRecord: () => dispatch(ACTIONS.pushRecord()),
  };
}
//Menuの中のpushRecordを使えるようにしている？必要ない？

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
