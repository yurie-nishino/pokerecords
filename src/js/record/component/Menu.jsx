import React from "react";
import Records from "./records";
import Compatibility from "./compatibility";
import Read from "../../favorites/containers/Read";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.favoritesActive = this.favoritesActive.bind(this);
  }

  favoritesActive() {
    console.log("index1");
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    console.log("-----------");
    const { isActive } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {isActive ? (
            <Read />
          ) : (
            <React.Fragment>
              <Records favoritesActive={this.favoritesActive} />
              <Compatibility />
            </React.Fragment>
          )}
        </header>
      </div>
    );
  }
}
export default Menu;
