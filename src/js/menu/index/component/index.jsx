import React from "react";
import css from "./index.module.css";

class IndexButton extends React.Component {

  render() {
    
    const{
      pushIndex,
    } = this.props;

    return (
      <div className = {css.menu}>
        <button onClick={pushIndex} className = {css.index_btn}>仲間ポケモン一覧</button>
      </div>
    );
  }
}
export default IndexButton;
