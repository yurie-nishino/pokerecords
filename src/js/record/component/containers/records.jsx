import React from "react";
import Records from "../records";
import Compatibility from "../compatibility";
class Record extends React.Component {


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
export default Record;
