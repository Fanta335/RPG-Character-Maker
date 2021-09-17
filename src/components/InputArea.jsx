import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

const InputArea = (props) => {
  const { charName, handleChangeName, charGender, handleChangeGender, charClass, handleChangeClass, charTrait, handleChangeTrait } = props;

  return (
    <Paper sx={{ flexGrow: 1, padding: "1rem" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", pb: 2 }}>
        入力エリア
      </Typography>

      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="名前" color="success" value={charName} onChange={handleChangeName} />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset" color="success">
            <FormLabel component="legend">性別</FormLabel>
            <RadioGroup aria-label="gender" defaultValue="male" name="radio-buttons-group" value={charGender} onChange={handleChangeGender}>
              <FormControlLabel value="male" control={<Radio />} label="男" />
              <FormControlLabel value="female" control={<Radio />} label="女" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl sx={{ m: 1, minWidth: 120 }} color="success">
            <InputLabel id="selectClass-label">職業</InputLabel>
            <Select labelId="selectClass-label" id="selectClass" value={charClass} onChange={handleChangeClass} label="selectClass">
              <MenuItem value={1}>勇者</MenuItem>
              <MenuItem value={2}>戦士</MenuItem>
              <MenuItem value={3}>魔法使い</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl sx={{ m: 1, minWidth: 120 }} color="success">
            <InputLabel id="selectTrait-label">性格</InputLabel>
            <Select labelId="selectTrait-label" id="selectTrait" value={charTrait} onChange={handleChangeTrait} label="selectTrait">
              <MenuItem value={1}>普通</MenuItem>
              <MenuItem value={2}>電光石火</MenuItem>
              {charClass === 1 ? <MenuItem value={3}>勇敢</MenuItem> : null}
              {charGender === "male" ? <MenuItem value={4}>ラッキーマン</MenuItem> : <MenuItem value={5}>おてんば</MenuItem>}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InputArea;
