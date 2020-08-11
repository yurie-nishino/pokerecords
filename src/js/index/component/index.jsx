import React from "react";
import Title from "./title"
import PokeMain from "./main";
class PokeIndex extends React.Component {
  render() {
    console.log("index2");
    return (
      <div>
        <Title />
        <PokeMain />
      </div>
    );
  }
}

export default PokeIndex;
