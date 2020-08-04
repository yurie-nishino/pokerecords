import React from "react";
import css from "./record.module.css";

class Friends extends React.Component {

  render() {
    return (
      <div>
        <h2 className = {css.record}>仲間ポケモン記録</h2>
      </div>
    );
  }
}
export default Friends;
