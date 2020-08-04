import React from "react";
import css from "./record.module.css";

class Place extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <p>捕まえた場所</p>
        <input /> 
      </div>
    );
  }
}
export default Place;