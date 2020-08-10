import React from "react";
import Friends from "./friends";
import Forms from "../containers/Form";

class Favorites extends React.Component {

  render() {
    console.log("index3");
    return (
      <React.Fragment>
          <Friends />
          <Forms />
      </React.Fragment>
    );
  }
}
export default Favorites;
