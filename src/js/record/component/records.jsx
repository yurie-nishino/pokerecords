import React from "react";
import Read from "../../favorites/containers/Read";
class Records extends React.Component {

  render() {
    return (
      <div>
        <Read />
        <button onClick={this.props.favoritesActive}>仲間ポケモン記録</button>
      </div>
    );
  }
}
export default Records;
