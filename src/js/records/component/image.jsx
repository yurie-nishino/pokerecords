import React from "react";
import css from "./record.module.css";

class Image extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <p>写真</p>
        <input type="file" id="file-input" name="ImageStyle"/>
      </div>
    );
  }
}
export default Image;