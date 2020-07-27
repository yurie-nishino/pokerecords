import React from "react";
import Home from "../../home/component/home";
import Favorites from "../component/favorites";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
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
          <Home toggleActive={this.toggleActive} />
        )}
      </div>
    );
  }
}

export default Index;

