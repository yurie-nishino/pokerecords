import React from "react";

class Records extends React.Component {

  render() {
    console.log("index4");
    return (
      <div>
        <button onClick={this.props.favoritesActive}>仲間ポケモン記録</button>
      </div>
    );
  }
}
export default Records;
