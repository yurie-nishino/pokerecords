import React from "react";
// import './App.css';
import Records from "../records";

class Record extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Records />
        </header>
      </div>
    );
  }
}
export default Record;
