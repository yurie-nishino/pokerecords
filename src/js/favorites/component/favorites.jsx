import React from "react";
import css from "./favorites.module.css";

class Favorites extends React.Component {

  render() {
    console.log("index3");
    return (
      <div>
        <p>仲間ポケモン記録</p>
        <p>ポケモン一覧</p>
        <p>捕まえた場所</p>
        <p>使ったモンスターボール</p>
        <p>捕まえた数</p>
      </div>
    );
  }
}
export default Favorites;
