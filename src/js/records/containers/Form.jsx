import React from "react";
import Form from "../component/form";

class Forms extends React.Component {
  constructor(props) {
    //初期値の設定
    super(props);
    this.state = {
      fileData: "",
    };
    this.onFileSelect = this.onFileSelect.bind(this);//ファイル投稿フォームの初期値。bindは別のファイルで関数を使いたいから書いている。
  }
  dispatchFileData(data) { // 送られてきたファイルの中身
    this.setState({
      fileData: data,
    });
  }
  onFileSelect(file) {  //ボタンが押された時に発火する関数。そのなかでファイルを読み込むクラスを使っている。
    const reader = new FileReader();
    reader.onload = () => {
      this.dispatchFileData(reader.result);//読み込んだファイル内容を保存する関数に送っている
    };
    reader.readAsDataURL(file.target.files[0]);//疑問4 読み込んだファイルをURLで表示するように指示している
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Form onFileSelect={this.onFileSelect} />
      </div>
    );
  }
}

export default Forms;
