import React from "react";
import css from "./friends.module.css";

class Friends extends React.Component {

  render() {
    return (
      <div>
        <h2 className = {css.friends}>仲間ポケモン記録</h2>
      </div>
    );
  }
}
export default Friends;
