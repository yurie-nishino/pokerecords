import React from "react";
// import css from "./records.module.css";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const RecordsButton = styled(Button)({
  borderRadius: 30,
  color: "#282c34",
  backgroundColor: "#8ed8fa",
  margin: "0 auto",
  marginTop: 30,
  display: "flex",
  justifyContent:"center"
});

class RecordButton extends React.Component {

  render() {
    console.log('this.props')
    console.log(this.props)
    const{
      pushRecord,
    } = this.props;
    return (
      <div>
        <RecordsButton variant="contained" onClick={pushRecord} >仲間ポケモン記録</RecordsButton>
      </div>
    );
  }
}
export default RecordButton;
