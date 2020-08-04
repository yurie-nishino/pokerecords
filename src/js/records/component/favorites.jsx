import React from "react";
import Friends from "./friends";
import Name from "./name";
import Image from "./image";
import Place from "./place";
import BallType from "./ballType";
import BallCount from "./ballCount";

class Favorites extends React.Component {

  render() {
    console.log("index3");
    return (
      <React.Fragment>
        <Friends />
        <Name />
        <Image />
        <Place />
        <BallType />
        <BallCount />
      </React.Fragment>
    );
  }
}
export default Favorites;
