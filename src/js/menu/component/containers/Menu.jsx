import React from "react";
import Records from "../records";
import Compatibility from "../compatibility";
import Index from "../index";
import Read from "./Read";
import PokeIndex from "../../../index/component/pokeIndex";

class Menu extends React.Component {
  // 初期値設定
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isIndex: false,
    };
    this.favoritesActive = this.favoritesActive.bind(this);
    this.indexActive = this.indexActive.bind(this);
  }

  favoritesActive() {
    console.log("test1");
    // ボタン押した時（true）
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  indexActive() {
    console.log("test2");
    // ボタン押した時（true）
    this.setState({
      isIndex: !this.state.isIndex
    });
  }

  render() {
    // 結果を返す
    console.log("-----------");
    const { isActive } = this.state;
    const { isIndex} = this.state;
    return (
      <div>
        <header>
          {isActive ? (
            <Read />
          ) : null}
          {isIndex ? (
            <PokeIndex />
          ) : null}
          {!isIndex && !isActive ? (
            <React.Fragment>
                <Records favoritesActive={this.favoritesActive} />
                <Index indexActive={this.indexActive}/>
                <Compatibility />
            </React.Fragment>
          ) : null}
        </header>
      </div>
    );
  }
}
export default Menu;
