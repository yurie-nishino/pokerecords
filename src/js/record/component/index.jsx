import React from "react";
import css from "./index.module.css";

class Index extends React.Component {

  render() {
    return (
      <div>
        <button className = {css.index_btn}>ポケモン一覧</button>
      </div>
    );
  }
}
export default Index;
