import { connect } from 'react-redux';
import ACTIONS from './js/home/modules/enterAction';
import Body from './Body';

function mapStateToProps(state) {
    console.log(state)
    console.log(state.enter)
  return {
    isPushed: state.enter.status.isPushed,
  };
}

function mapDispatchToProps(dispatch) {
    return {
    pushEnter: () => dispatch(ACTIONS.pushEnter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
