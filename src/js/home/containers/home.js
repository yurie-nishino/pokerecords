import { connect } from 'react-redux';
import ACTIONS from '../modules/enterAction';
import Home from '../component/home.jsx';

function mapStateToProps(state) {
  return {
    isPush: state.enter.status.isPush,
  };
}

function mapDispatchToProps(dispatch) {
    return {
    pushEnter: () => dispatch(ACTIONS.pushEnter()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
