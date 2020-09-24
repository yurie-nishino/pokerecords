import React from "react";
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BallType() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    console.log(handleChange);
    setAge(event.target.value);
  };
  return (
    <div>
      <p>使ったモンスターボールの種類</p>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            {/* <em> なし</em> */}
          </MenuItem>
          <MenuItem value={10}>モンスターボール</MenuItem>
          <MenuItem value={20}>スーパーボール</MenuItem>
          <MenuItem value={30}>ハイパーボール</MenuItem>
        </Select>
      </FormControl>
      {/* <input type="text" onChange={this.props.ballTypeChange} className={css.textbox}/>  */}
      {/* <TextField onChange={this.props.ballTypeChange} id="outlined-basic" label="balltype" variant="outlined" /> */}
    </div>
  );
}
