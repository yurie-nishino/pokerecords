import React from "react";
import Favorites from "../../../records/component/favorites";
import PokeIndex from "../../../index/component/pokeIndex";

class Index extends React.Component {
  render() {
    console.log("index2");
    return (
      <div>
        <Favorites />
        <PokeIndex />
      </div>
    );
  }
}

export default Index;
