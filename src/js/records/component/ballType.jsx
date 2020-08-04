import React from "react";
import css from "./record.module.css";

class BallType extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <p>使ったモンスターボールの種類</p> 
        <input /> 
      </div>
    );
  }
}
export default BallType;