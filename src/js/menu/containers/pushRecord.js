import { connect } from 'react-redux';
// import ACTIONS from '../modules/enterAction';
import Menu from '../component/Menu';

//ポケモン記録（pokeRecord）
function mapStateToProps(state) {
  return {
    isPushRecord: state.record.status.isPushed,
  }
}

function mapDispatchToProps(dispatch) {
    return {
    // pushEnter: () => dispatch(ACTIONS.pushEnter()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
