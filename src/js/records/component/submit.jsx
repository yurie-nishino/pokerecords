import React from "react";
// import css from "./record.module.css";
import css from "./form.module.css";

class Submit  extends React.Component {

  render() {
    return (
        <div>
          <input type='submit'onClick={this.props.hundleSubmit} value='送信' className={css.submit_btn} />
        </div>
    );
  }
}
export default Submit;