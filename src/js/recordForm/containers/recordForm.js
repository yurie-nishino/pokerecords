import { connect } from 'react-redux';
// import ACTIONS from '../modules/enterAction';
import Menu from '../menu/component/Menu.jsx';

//ポケモン記録(records)
function mapStateToProps(state) {
  console.log(state.record);
  console.log(state.record.status);
  return {
    ispushRecord: state.record.status.isPushed,
  }
}

function mapDispatchToProps(dispatch) {
    return {
    // pushEnter: () => dispatch(ACTIONS.pushEnter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
