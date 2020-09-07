import React from "react";
// import css from "./record.module.css";
// import css from "../../component/form.module.css";
import TextField from '@material-ui/core/TextField';

class BallCount  extends React.Component {

  render() {
    return (
        <div>
          <p>使ったモンスターボールの数</p>
          {/* <input type="text" onChange={this.props.ballCountChange} className={css.textbox}/> */}
          <TextField onChange={this.props.ballCountChange} id="outlined-basic" label="Count" variant="outlined" />
        </div>
    );
  }
}
export default BallCount;