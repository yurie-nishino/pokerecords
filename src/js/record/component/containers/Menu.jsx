import React from "react";
import Records from "../Records";
import Compatibility from "../Compatibility";
class Menu extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Records />
          <Compatibility />
        </header>
      </div>
    );
  }
}
export default Menu;
