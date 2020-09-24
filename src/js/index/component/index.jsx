import React from "react";
import Title from "./title"
// import PokeName from "../name/component/name";
// import PokeImage from "../photo/component/image";
import Test from "./test";
// import PokeMain from "../main/component/main";
class PokeIndex extends React.Component {
  render() {
    return (
      <div>
        <Title />
        {/* <PokeName /> */}
        {/* <PokeImage /> */}
        <Test></Test>
      </div>
    );
  }
}

export default PokeIndex;

