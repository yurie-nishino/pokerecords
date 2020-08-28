import React from "react";
import Home from "./js/home/containers/home";
import Menu from "./js/menu/containers/menu";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecordDisplayActive: false,
    };
    this.toggleActive = this.toggleActive.bind(this); 
  }

  toggleActive() {
    this.setState({
      isRecordDisplayActive: !this.state.isRecordDisplayActive,
    });
  }

  render() {
    return (
      <div>
        {this.props.isPushed ? (
          <Menu />
        ) : (
          <Home toggleActive={this.toggleActive} />
        )}
      </div>
    );
  }
}

export default Body;
