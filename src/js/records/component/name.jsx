import React from "react";
import css from "./record.module.css";

class Name  extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <p>名前（種類）</p>
        <input />
      </div>
    );
  }
}
export default Name;
