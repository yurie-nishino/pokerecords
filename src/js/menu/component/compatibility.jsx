import React from "react";
import css from "./compatibility.module.css";

class Compatibility extends React.Component {

  render() {
    return (
      <div className = {css.menu}>
        <button onClick={this.props.battleActive} className = {css.vs_btn}>バトル相性診断</button>
      </div>
    );
  }
}
export default Compatibility;
