import React from "react";
// import css from "./record.module.css";
import css from "./form.module.css";

class BallType  extends React.Component {

  render() {
    return (
        <div>
          <p>使ったモンスターボールの種類</p> 
          <input type="text" onChange={this.props.ballTypeChange} className={css.textbox}/> 
        </div>
    );
  }
}
export default BallType;