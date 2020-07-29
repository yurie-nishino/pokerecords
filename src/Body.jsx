import React from "react";
import Home from "./js/home/component/Home";
import Menu from "./js/record/component/containers/Menu";
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

  toResultIf(calc) {
    if (calc === 2) {
      return 'ok';
    }
    return 'ng';
  }

  toResultExam(calc) {
    return calc === 2 ? 'ok': 'ng';
  }

  render() {
    console.log("toggleActive3");
    console.log(this.state.isRecordDisplayActive);
    const calc = 0 + 1;
    const resultIf = this.toResultIf(calc);
    console.log(`resultIf: ${resultIf}`);
    const resultExam = this.toResultExam(calc);
    console.log(`resultExam: ${resultExam}`);
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
