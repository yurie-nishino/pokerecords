import React from "react";
// import css from "./record.module.css";

class Image  extends React.Component {

  render() {
    return (
        <div>
          <p>写真</p>
          <input onChange={file => this.props.onFileSelect(file)} type="file" id="file-input" />
        </div>
    );
  }
}
export default Image;