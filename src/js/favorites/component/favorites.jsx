import React from "react";
import Friends from "./friends";

class Favorites extends React.Component {

  render() {
    console.log("index3");
    return (
      <div>
        <Friends />
        <p>ポケモン一覧</p>
        <p>捕まえた場所</p>
        <p>使ったモンスターボール</p>
        <p>捕まえた数</p>
      </div>
    );
  }
}
export default Favorites;
