import React from "react";
import css from "./home.module.css";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  borderRadius: 30,
  color: "#282c34",
  backgroundColor: "#8ed8fa",
  marginBottom: "30px",
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
          <MyButton variant="contained" >Sign Up</MyButton>
          <MyButton variant="contained" onClick={pushEnter}>Sign In</MyButton>
        </div>
      </React.Fragment>
    );
  }
}


export default Home;