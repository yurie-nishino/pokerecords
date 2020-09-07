import React from "react";
import css from "./compatibility.module.css";

class CompatibilityButton extends React.Component {

  render() {
    const{
      pushCompatibility,
    } = this.props;
    return (
      <div className = {css.menu}>
        <button onClick={pushCompatibility} className = {css.vs_btn}>バトル相性診断</button>
      </div>
    );
  }
}
export default CompatibilityButton;

