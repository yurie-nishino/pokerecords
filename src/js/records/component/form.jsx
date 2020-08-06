import React from "react";
// import css from "./record.module.css";
import css from "./form.module.css";


class Form  extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className={css.form_box}>
        <form>
          <p>名前（種類）</p>
          <input type="text" className={css.textbox}/>

          <p>写真</p>
          <input onChange={file => this.props.onFileSelect(file)} type="file" id="file-input"/>

          <p>捕まえた場所</p>
          <input type="text" className={css.textbox}/> 

          <p>使ったモンスターボールの種類</p> 
          <input type="text" className={css.textbox}/> 

          <p>使ったモンスターボールの数</p>
          <input type="text" className={css.textbox}/>

          <input type='submit' value='送信' className={css.submit_btn} />
        </form>
      </div>
    );
  }
}
export default Form;
