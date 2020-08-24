import React from "react";
import css from "../component/form.module.css";
import Name from "../component/name";
import Image from "../component/image";
import Place from "../component/place";
import BallType from "../component/ballType";
import BallCount from "../component/ballCount";
import Submit from "../component/submit";

class Forms extends React.Component {
  constructor(props) {
    //初期値の設定
    super(props);
    this.state = {
      fileData: "", //イメージ
      name: "", // ポケモンの名前
      place: "", // 捕まえた場所
      ballType: "", // 使ったボールの種類
      ballCount: "", // 使ったボールの数
      Submit: false, // 送信ボタン
    };
    this.onFileSelect = this.onFileSelect.bind(this); //ファイル投稿フォームの初期値。bindは別のファイルで関数を使いたいから書いている。
    this.nameChange = this.nameChange.bind(this);
    this.placeChange = this.placeChange.bind(this);
    this.ballTypeChange = this.ballTypeChange.bind(this);
    this.ballCountChange = this.ballCountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); //送信ボタン
  }

  dispatchFileData(data) {
    // 送られてきたファイルの中身
    this.setState({
      fileData: data,
    });
  }
  onFileSelect(file) {
    //ボタンが押された時に発火する関数。そのなかでファイルを読み込むクラスを使っている。
    const reader = new FileReader();
    reader.onload = () => {
      this.dispatchFileData(reader.result); //読み込んだファイル内容を保存する関数に送っている
    };
    reader.readAsDataURL(file.target.files[0]); //ファイルをURLで読み込む
  }

  //テキストフォームの内容を読み込む。stateを上書きする
  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  placeChange(event) {
    this.setState({ place: event.target.value });
  }

  ballTypeChange(event) {
    this.setState({ ballType: event.target.value });
  }

  ballCountChange(event) {
    this.setState({ ballCount: event.target.value });
  }

  //内容をまとめて送信して保存
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={css.form_box}>
        <form>
          <Name nameChange={this.nameChange} />
          <Image onFileSelect={this.onFileSelect} fileData={this.state.fileData} />
          <Place placeChange={this.placeChange} />
          <BallType ballTypeChange={this.ballTypeChange} />
          <BallCount ballCountChange={this.ballCountChange} />
          <Submit onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Forms;