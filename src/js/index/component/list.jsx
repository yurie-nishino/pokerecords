import React from "react";
import PokeName from "./name";
import PokeImage from "./image";

class PokeList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PokeName />
        <PokeImage />
      </React.Fragment>
    )
  }
}

export default PokeList;
