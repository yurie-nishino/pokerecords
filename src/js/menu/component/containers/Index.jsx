import React from "react";
import Favorites from "../../../records/component/favorites";
import PokeIndex from "../../../index/component/pokeIndex";
import Combination from "../../../battle/component/combination";

class Index extends React.Component {
  render() {
    console.log("index2");
    return (
      <React.Fragment>
        <Favorites />
        <PokeIndex />
        <Combination />
      </React.Fragment>
    );
  }
}

export default Index;
