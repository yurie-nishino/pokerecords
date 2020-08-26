import { connect } from "react-redux";
import ACTIONS from "../modules/indexAction";
import IndexButton  from "../component/index.jsx";
function mapStateToProps(state) {
  return {
    isPush: state.index.status.isPush, //mainReducerの中のrecordを読み込み?
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushIndex: () => dispatch(ACTIONS.pushIndex()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexButton);
