import React from "react";
import Home from "./js/home/component/Home";
import Menu from "./js/record/component/Menu";
class Body extends React.Component {
  constructor(props) {
    console.log("toggleActive1");
    super(props);
    this.state = {
      isRecordDisplayActive: false,
    };
    this.toggleActive = this.toggleActive.bind(this); 
  }

  toggleActive() {
    console.log("toggleActive2");
    console.log(this.state.isRecordDisplayActive);
    this.setState({
      isRecordDisplayActive: !this.state.isRecordDisplayActive,
    });
    console.log("toggleActive2_1");
    console.log(this.state.isRecordDisplayActive);
  }

  render() {
    return (
      <div>
        {this.state.isRecordDisplayActive ? (
          <Menu />
        ) : (
          <Home toggleActive={this.toggleActive} />
        )}
      </div>
    );
  }
}

export default Body;
