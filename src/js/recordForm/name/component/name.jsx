import React from "react";
// import css from "./record.module.css";
// import css from "../../component/form.module.css";
import TextField from '@material-ui/core/TextField';


class Name  extends React.Component {

  render() {
    return (
        <div>
          <p>名前（種類）</p>
          {/* <input type="text" onChange={this.props.nameChange} className={css.textbox}/> */}
          <TextField onChange={this.props.nameChange} id="outlined-basic" label="name" variant="outlined" />
        </div>
    );
  }
}
export default Name;

