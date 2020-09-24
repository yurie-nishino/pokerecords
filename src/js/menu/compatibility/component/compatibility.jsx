import React from "react";
// import css from "./compatibility.module.css";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const BattleButton = styled(Button)({
  borderRadius: 30,
  color: "#282c34",
  backgroundColor: "#8ed8fa",
  margin: "0 auto",
  marginTop: 30,
  paddingLeft:25,
  paddingRight:25,
  display: "flex",
  justifyContent:"center"
});


class CompatibilityButton extends React.Component {

  render() {
    const{
      pushCompatibility,
    } = this.props;
    return (
      <div>
        <BattleButton onClick={pushCompatibility}>バトル相性診断</BattleButton>
      </div>
    );
  }
}
export default CompatibilityButton;

