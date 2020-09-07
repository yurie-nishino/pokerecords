import React from "react";
// import css from "./record.module.css";
import css from "../../component/form.module.css";
import TextField from '@material-ui/core/TextField';

class BallType  extends React.Component {

  render() {
    return (
        <div>
          <p>使ったモンスターボールの種類</p> 
          {/* <input type="text" onChange={this.props.ballTypeChange} className={css.textbox}/>  */}
          <TextField onChange={this.props.ballTypeChange} id="outlined-basic" label="balltype" variant="outlined" />
        </div>
    );
  }
}
export default BallType;