import React from "react";
// import css from "./record.module.css";

class Image extends React.Component {
  render() {
    return (
      <div>
        <p>写真</p>
        <label>
          <input
            onChange={(file) => this.props.onFileSelect(file)}
            type="file"
            id="file-input"
            style={{ display: "none" }}
          />
          <div
            style={{ borderStyle: 'solid', borderWidth: '3px'}}
          >
            test
          </div>
        </label>
      </div>
    );
  }
}
export default Image;
