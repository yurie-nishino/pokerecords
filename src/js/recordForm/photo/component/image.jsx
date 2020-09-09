import React from "react";
// import css from "./record.module.css";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { styled } from '@material-ui/core/styles';

const PhotoIconButton = styled(IconButton)({
  color: "#49a9d4",
});

// const ImagePhotoCamera = styled(PhotoCamera)({
//   size: "30px",
//   boxShadow: "0 3px 0 #bcd2fa",
// });

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
          <PhotoIconButton
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </PhotoIconButton>
        </label>
      </div>
    );
  }
}
export default Image;
