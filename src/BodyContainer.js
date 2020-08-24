import { connect } from 'react-redux';
import ACTIONS from './js/home/modules/enterAction';
import Body from './Body';

//①State情報をPropsとして扱うことができるということ。
function mapStateToProps(state) {
  return {
    isPushed: state.enter.status.isPushed,
  };
}

//②Action関数をPropsとして扱うことができるということ。
function mapDispatchToProps(dispatch) {
    return {
    pushEnter: () => dispatch(ACTIONS.pushEnter()),
  };
}

// ①と②を繋げてexport
export default connect(mapStateToProps, mapDispatchToProps)(Body);
