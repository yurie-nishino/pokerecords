import React from "react";
import css from "./records.module.css";

class RecordButton extends React.Component {

  render() {
    console.log('this.props')
    console.log(this.props)
    const{
      pushRecord,
    } = this.props;
    return (
      <div className = {css.menu}>
        <button onClick={pushRecord} className={css.fav_btn}>仲間ポケモン記録</button>
      </div>
    );
  }
}
export default RecordButton;
