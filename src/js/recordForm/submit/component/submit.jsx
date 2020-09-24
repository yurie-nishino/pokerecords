import React from "react";
// import css from "./record.module.css";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


const SubmitButton = styled(Button)({
  borderRadius: 30,
  color: "#282c34",
  backgroundColor: "#8ed8fa",
  marginTop: "50px",
});

class Submit  extends React.Component {

  render() {
    return (
        <div>
          {/* <input type='submit'onClick={this.props.onSubmit} value='送信' className={css.submit_btn} /> */}
          <SubmitButton variant="contained" onClick={this.props.onSubmit} >Submit</SubmitButton>
        </div>
    );
  }
}
export default Submit;