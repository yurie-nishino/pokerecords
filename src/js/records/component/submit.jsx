import React from "react";
import css from "./record.module.css";

class  Submit extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <input type='submit' value='送信' /> 
      </div>
    );
  }
}
export default Submit;