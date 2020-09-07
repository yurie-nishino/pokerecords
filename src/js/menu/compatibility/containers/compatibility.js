import { connect } from 'react-redux';
import ACTIONS from '../modules/compatibilityAction';
import CompatibilityButton from '../component/compatibility';

function mapStateToProps(state) {
  return {
    isPush: state.compatibility.status.isPush,
  };
}

function mapDispatchToProps(dispatch) {
    return {
    pushCompatibility: () => dispatch(ACTIONS.pushCompatibility()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompatibilityButton);
