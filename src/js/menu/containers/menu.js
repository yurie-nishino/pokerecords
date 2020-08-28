import { connect } from 'react-redux';
// import ACTIONS from '../modules/enterAction';
import Menu from '../component/Menu';

//ポケモン一覧（pokeIndex）
function mapStateToProps(state) {
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
