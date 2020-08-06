import React from "react";
import css from "./records.module.css";

class Records extends React.Component {

  render() {
    console.log("index4");
    console.log(this.props)
    return (
      <div className = {css.menu}>
        <button onClick={this.props.favoritesActive} className={css.fav_btn}>仲間ポケモン記録</button>
      </div>
    );
  }
}
export default Records;
