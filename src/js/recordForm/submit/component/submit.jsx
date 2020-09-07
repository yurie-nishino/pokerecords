import React from "react";
// import css from "./record.module.css";
// import css from "../../component/form.module.css";
import Button from '@material-ui/core/Button';

class Submit  extends React.Component {

  render() {
    return (
        <div>
          {/* <input type='submit'onClick={this.props.onSubmit} value='送信' className={css.submit_btn} /> */}
          <Button variant="contained" onClick={this.props.onSubmit} >Submit</Button>
        </div>
    );
  }
}
export default Submit;