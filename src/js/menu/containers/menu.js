import { connect } from 'react-redux';
// import ACTIONS from '../modules/enterAction';
import Menu from '../component/Menu.jsx';

function mapStateToProps(state) {
  console.log(state.index);
  console.log(state.index.status);
  return {
    isPushIndex: state.index.status.isPushed,
  }
}

function mapDispatchToProps(dispatch) {
    return {
    // pushEnter: () => dispatch(ACTIONS.pushEnter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
