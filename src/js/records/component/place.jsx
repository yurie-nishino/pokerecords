import React from "react";
// import css from "./record.module.css";
import css from "./form.module.css";

class Place  extends React.Component {

  render() {
    return (
        <div>
          <p>捕まえた場所</p>
          <input type="text" onChange={this.props.placeChange} className={css.textbox}/> 
        </div>
    );
  }
}
export default Place;