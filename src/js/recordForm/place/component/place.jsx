import React from "react";
// import css from "./record.module.css";
import css from "../../component/form.module.css";
import TextField from '@material-ui/core/TextField';

class Place  extends React.Component {

  render() {
    return (
        <div>
          <p>捕まえた場所</p>
          {/* <input type="text" onChange={this.props.placeChange} className={css.textbox}/>  */}
          <TextField onChange={this.props.placeChange} id="outlined-basic" label="Place" variant="outlined" />
        </div>
    );
  }
}
export default Place;