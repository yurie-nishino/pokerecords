import React from "react";
import css from "./home.module.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className = {css.Home_header}>
          <h1> 
            Pokemon <span>Records</span>
          </h1>
          <button onClick={this.props.toggleActive} className={css.record_btn}>Records(記録する)</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;