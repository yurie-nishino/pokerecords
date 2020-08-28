import { connect } from 'react-redux';
import ACTIONS from '../modules/recordAction';
import RecordButton from '../component/records';

function mapStateToProps(state) {
  return {
    isPush: state.record.status.isPush, //mainReducerの中のrecordを読み込み
  };
}

function mapDispatchToProps(dispatch) {
    return {
    pushRecord: () => dispatch(ACTIONS.pushRecord()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
