import React from "react";
import Friends from "./friends";

class Favorites extends React.Component {

  render() {
    console.log("index3");
    return (
      <React.Fragment>
        <Friends />
        <p>名前（種類）</p>
        <input />
        <p>写真</p>
        <input type="file" id="file-input" name="ImageStyle"/>
        <p>捕まえた場所</p>
        <input /> 
        <p>使ったモンスターボールの種類</p> 
        <input /> 
        <p>使ったモンスターボールの数</p>
        <input />
      </React.Fragment>
    );
  }
}
export default Favorites;
