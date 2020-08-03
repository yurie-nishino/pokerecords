import React from "react";
import Favorites from "../component/favorites";

class Index extends React.Component {
  render() {
    console.log("index2");
    return (
      <div>
        <Favorites />
      </div>
    );
  }
}

export default Index;
