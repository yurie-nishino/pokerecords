import React from "react";
import Favorites from "../component/Favorites";
import Menu from "../containers/Menu.jsx";
// import Records from "../../record/component/Records";

class Index extends React.Component {
  constructor(props) {
    console.log("start");
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
    console.log("index2");
    return (
      <div>
        {this.state.isActive ? (
          <Favorites />
        ) : (
          <Menu favoritesActive={this.favoritesActive} />
        )}
      </div>
    );
  }
}

export default Index;

