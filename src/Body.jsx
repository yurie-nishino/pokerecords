import React from "react";
import Home from "./js/home/component/home";
import Record from "./js/record/component/containers/records";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecoedDisplayActive: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({
      isRecoedDisplayActive: !this.state.isRecoedDisplayActive,
    });
  }

  render() {
    return (
      <div>
        {this.state.isRecoedDisplayActive ? (
          <Record />
        ) : (
          <Home toggleActive={this.toggleActive} />
        )}
      </div>
    );
  }
}

export default Body;
