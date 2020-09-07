import React from "react";
// import css from "./record.module.css";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

class Image extends React.Component {
  render() {
    return (
      <div>
        <label>
          <p>写真</p>
          <input
            onChange={(file) => this.props.onFileSelect(file)}
            type="file"
            id="file-input"
            style={{ display: "none" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    );
  }
}
export default Image;
