import React from "react";
import Records from "../records";
import Compatibility from "../compatibility";
import Index from "../index";
import Read from "./Read";
import PokeIndex from "../../../index/component/pokeIndex";
import Combination from "../../../battle/component/combination";

class Menu extends React.Component {
  // 初期値設定
  constructor(props) {
    super(props);
    this.state = {
      isActive: false, //何も押してないからfalse
      isIndex: false,
      isBattle: false,
    };
    //変数を定義↓
    this.favoritesActive = this.favoritesActive.bind(this); //bindとはkey名？？
    this.indexActive = this.indexActive.bind(this);
    this.battleActive = this.battleActive.bind(this);
  }

  favoritesActive() {
    //関数
    console.log("test1");
    // ボタン押した時（true）
    this.setState({
      //変更する値（プロパティ）
      isActive: !this.state.isActive, // !は反転
    });
  }

  indexActive() {
    console.log("test2");
    // ボタン押した時（true）
    this.setState({
      isIndex: !this.state.isIndex
    });
  }

  battleActive() {
    console.log("test2");
    // ボタン押した時（true）
    this.setState({
      isBattle: !this.state.isBattle
    });
  }


  render() {
    // 結果を返す
    console.log("-----------");
    const { isActive } = this.state;
    const { isIndex} = this.state;
    const { isBattle} = this.state;
    return (
      <div>
        <header>
          {isActive ? (
            <Read />
          ) : null}
          {isIndex ? (
            <PokeIndex />
          ) : null}
          {isIndex ? (
            <Combination />
          ) : null}
          {!isIndex && !isActive && !isBattle ? (
            <React.Fragment>
                <Records favoritesActive={this.favoritesActive} />
                <Index indexActive={this.indexActive}/>
                <Compatibility battleActive={this.battleActive} />
            </React.Fragment>
          ) : null}
        </header>
      </div>
    );
  }
}
export default Menu;
