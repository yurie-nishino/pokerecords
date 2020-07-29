import React from "react";
import Favorites from "../component/Favorites";
import Records from "../../record/component/Records";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.favoritesActive = this.favoritesActive.bind(this);
  }

  favoritesActive() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <div>
        {this.state.isActive ? (
          <Favorites />
        ) : (
          <Records favoritesActive={this.favoritesActive} />
        )}
      </div>
    );
  }
}

export default Index;

