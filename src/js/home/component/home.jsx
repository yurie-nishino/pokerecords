import React from "react";
import css from "./home.module.css";
import Button from '@material-ui/core/Button';

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
          <Button variant="contained" color="primary" onClick={pushEnter} className={css.record_btn}>Records(記録する)</Button>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;