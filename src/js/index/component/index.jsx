import React from "react";
import Title from "./title"
import PokeName from "../name/component/name";
import PokeImage from "../photo/component/image";
// import PokeMain from "../main/component/main";
class PokeIndex extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <PokeName />
        <PokeImage />
      </div>
    );
  }
}

export default PokeIndex;

