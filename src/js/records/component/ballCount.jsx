import React from "react";
// import css from "./record.module.css";
import css from "./form.module.css";

class BallCount  extends React.Component {

  render() {
    return (
        <div>
          <p>使ったモンスターボールの数</p>
          <input type="text" onChange={this.props.ballCountChange} className={css.textbox}/>
        </div>
    );
  }
}
export default BallCount;