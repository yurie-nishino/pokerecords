import React from "react";
import css from "./index.module.css";

class Index extends React.Component {

  render() {
    console.log('this.props')
    console.log(this.props)
    return (
      <div className = {css.menu}>
        <button onClick={this.props.indexActive} className = {css.index_btn}>仲間ポケモン一覧</button>
      </div>
    );
  }
}
export default Index;
