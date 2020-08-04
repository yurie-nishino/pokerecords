import React from "react";
import css from "./record.module.css";

class BallCount extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <p>使ったモンスターボールの数</p>
        <input />
      </div>
    );
  }
}
export default BallCount;