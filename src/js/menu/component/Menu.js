import React from "react";
import Record from "../record/containers/record";
import Compatibility from "../compatibility/containers/compatibility";
import Index from "../index/containers";
import Forms from "../../recordForm/component/Form";
import PokeIndex from "../../index/component/index";
import Combination from "../../combination/component/combination";
import css from "./menu.module.css";

// import { makeStyles } from "@material-ui/core/styles";
// import { styled } from '@material-ui/core/styles';
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

export default function Menu(props) {
  console.log(props);
  // 初期値設定
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // isActive: false, //何も押してないからfalse
  //     // isIndex: false,
  //     // isBattle: false,
  //   };
  //   //変数を定義↓初期値
  //   //bindは他のファイルで使用する関数に対して当てるもので、propsで渡したい関数。
  //   //recordなど子コンポーネントで関数が使われているからbind必要
  //   this.recordActive = this.recordActive.bind(this);
  //   this.indexActive = this.indexActive.bind(this);
  //   this.compatibilityActive = this.compatibilityActive.bind(this);
  // }

  // recordActive() {
  //   //jsx側でonClickした時に呼び出される関数
  //   // ボタン押した時（true）
  //   this.setState({
  //     //変更する値（プロパティ）
  //     isActive: !this.state.isActive, // !は反転なのでtrue
  //   });
  // }

  // indexActive() {
  //   //ボタン押した時に呼び出される関数
  //   // ボタン押した時（true）
  //   this.setState({
  //     isIndex: !this.state.isIndex
  //   });
  // }

  // compatibilityActive() {
  //   //ボタン押した時に呼び出される関数
  //   // ボタン押した時（true）
  //   this.setState({
  //     isCompatybility: !this.state.isCompatybility
  //   });
  // }

  // ビューの部分（.jsx
  console.log(this);
  const { isPushRecord } = props; //オブジェクトなので{}分割代入
  const { isPushCompatibility } = props;
  const { isPushIndex } = props;
  return (
    <div>
      <header>
        {isPushRecord ? (
          //trueの時に画面遷移、それ以外（:）は何も起こらずそのまま（null）
          <Forms />
        ) : null}
        {isPushIndex ? <PokeIndex /> : null}
        {isPushCompatibility ? <Combination /> : null}
        {!isPushIndex && !isPushRecord && !isPushCompatibility ? (
          //isIndex,isActive,isBattleがfalseの時↑
          //ここから始まる！！！
          //jsx側に渡し、onClickした時に{}が発動（今回は関数が引数になってる）↓
          <div className = {css.Menu_button}>
            <Record />
            <Index />
            <Compatibility />
          </div>
        ) : null}
      </header>
    </div>
  );
}
