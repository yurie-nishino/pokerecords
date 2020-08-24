import React from "react";
import Friends from "./friends";
import Forms from "../containers/Form";

class Record extends React.Component {

  render() {
    return (
      <React.Fragment>
          <Friends />
          <Forms />
      </React.Fragment>
    );
  }
}
export default Record;
