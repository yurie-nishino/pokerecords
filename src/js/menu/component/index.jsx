import React from "react";
import css from "./index.module.css";

class Index extends React.Component {

  render() {
    return (
      <div className = {css.menu}>
        <button onClick = {this.props.favoritesActive} className = {css.index_btn}>仲間ポケモン一覧</button>
      </div>
    );
  }
}
export default Index;
