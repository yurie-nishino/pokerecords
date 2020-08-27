import React from "react";
import Record from "../record/containers";
import Compatibility from "../compatibility/component/compatibility";
import Index from "../index/containers";
import Forms from "../../recordForm/component/Form";
import PokeIndex from "../../index/component/index";
import Combination from "../../combination/component/combination";

class Menu extends React.Component {
  // 初期値設定
  constructor(props) {
    super(props);
    this.state = {
      // isActive: false, //何も押してないからfalse
      // isIndex: false,
      isBattle: false,
    };
    //変数を定義↓初期値
    //bindは他のファイルで使用する関数に対して当てるもので、propsで渡したい関数。
    //recordなど子コンポーネントで関数が使われているからbind必要
    this.favoritesActive = this.favoritesActive.bind(this);
    this.indexActive = this.indexActive.bind(this);
    this.battleActive = this.battleActive.bind(this);
  }

  favoritesActive() {
    //jsx側でonClickした時に呼び出される関数
    // ボタン押した時（true）
    this.setState({
      //変更する値（プロパティ）
      isActive: !this.state.isActive, // !は反転なのでtrue
    });
  }

  indexActive() {
    //ボタン押した時に呼び出される関数
    // ボタン押した時（true）
    this.setState({
      isIndex: !this.state.isIndex
    });
  }

  battleActive() {
    //ボタン押した時に呼び出される関数
    // ボタン押した時（true）
    this.setState({
      isBattle: !this.state.isBattle
    });
  }

  render() {
  
    // ビューの部分（.jsx
    const {ispushRecord} = this.state; //オブジェクトなので{}分割代入
    const { isBattle} = this.state;
    const{isPushIndex} = this.props;
    return (
      <div>
        <header>
          { ispushRecord ? (
            //trueの時に画面遷移、それ以外（:）は何も起こらずそのまま（null）
            <Forms />
          ) : null}
          { isPushIndex ? (
            <PokeIndex />
          ) : null}
          {isBattle ? (
            <Combination />
          ) : null}
          {!isPushIndex && !ispushRecord && !isBattle ? (
            //isIndex,isActive,isBattleがfalseの時↑
            //ここから始まる！！！
            //jsx側に渡し、onClickした時に{}が発動（今回は関数が引数になってる）↓
            <React.Fragment>
                <Record />
                <Index />
                <Compatibility battleActive={this.battleActive} />
            </React.Fragment>
          ) : null}
        </header>
      </div>
    );
  }
}
export default Menu;
