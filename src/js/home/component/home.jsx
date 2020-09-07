import React from "react";
import css from "./home.module.css";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  borderRadius: 30,
});

class Home extends React.Component {
  render() {
    const {
      pushEnter,
    } = this.props;
    
    return (
      <React.Fragment>
        <div className = {css.Home_header}>
          <h1> 
            Pokemon <span>Records</span>
          </h1>
          <MyButton variant="contained" color="primary" className={css.record_btn}>Sign Up</MyButton>
          <MyButton variant="contained" color="primary" onClick={pushEnter} className={css.record_btn}>Sign In</MyButton>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;