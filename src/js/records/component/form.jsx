import React from "react";
import css from "./record.module.css";

class Form  extends React.Component {

  render() {
    return (
      <div className = {css.record}>
        <form>
          <p>名前（種類）</p>
          <input />

          <p>写真</p>
          <input type="file" id="file-input" name="ImageStyle"/>

          <p>捕まえた場所</p>
          <input /> 

          <p>使ったモンスターボールの種類</p> 
          <input /> 

          <p>使ったモンスターボールの数</p>
          <input />

          <input
            type='submit'
            value='送信'
          />
        </form>
      </div>
    );
  }
}
export default Form;
