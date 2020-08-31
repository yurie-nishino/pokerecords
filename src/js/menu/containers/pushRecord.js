import { connect } from 'react-redux';
// import ACTIONS from '../modules/enterAction';
import Menu from '../component/Menu';

//ポケモン記録（pokeRecord）
function mapStateToProps(state) {
  return {
    isPushRecord: state.record.status.isPushed,
  }
}// isPushRecordは、recordReducerの処理を返す。stateの中のrecord（mainReducer）のstatus(状態)がisPushed（）のTrue or Falseの状態を返す
//Menuでstateの結果を扱えるようにし、trueの際に＜Forms /＞へ画面遷移するようにしている

function mapDispatchToProps(dispatch) {
    return {
    pushRecord: () => dispatch(ACTIONS.pushRecord()),
  };
}//Menuの中のpushRecordを使えるようにしている？必要ない？

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
