import React from "react";
import Records from "../records";
import Compatibility from "../compatibility";
import Index from "../index";
import Read from "./Read";

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
      <div>
        <header>
          {isActive ? (
            <Read />
          ) : (
            <React.Fragment>
                <Records favoritesActive={this.favoritesActive} />
                <Index />
                <Compatibility />
            </React.Fragment>
          )}
        </header>
      </div>
    );
  }
}
export default Menu;
