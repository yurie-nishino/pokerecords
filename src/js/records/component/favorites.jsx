import React from "react";
import Friends from "./friends";
import Form from "./form";

class Favorites extends React.Component {

  render() {
    console.log("index3");
    return (
      <React.Fragment>
          <Friends />
          <Form />
      </React.Fragment>
    );
  }
}
export default Favorites;
