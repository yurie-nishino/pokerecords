import React from "react";
// import css from "./index.module.css";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const IndexsButton = styled(Button)({
  borderRadius: 30,
  color: "#282c34",
  backgroundColor: "#8ed8fa",
  margin: "0 auto",
  marginTop: 30,
  display: "flex",
  justifyContent:"center"
});

class IndexButton extends React.Component {

  render() {
    
    const{
      pushIndex,
    } = this.props;

    return (
      <div>
        <IndexsButton variant="contained" onClick={pushIndex} >仲間ポケモン一覧</IndexsButton>
      </div>
    );
  }
}
export default IndexButton;
