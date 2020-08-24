import React from "react";
// import css from "./record.module.css";
import css from "./form.module.css";

class Name  extends React.Component {

  render() {
    return (
        <div>
          <p>名前（種類）</p>
          <input type="text" onChange={this.props.nameChange} className={css.textbox}/>
        </div>
    );
  }
}
export default Name;