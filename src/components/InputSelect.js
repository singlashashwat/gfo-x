import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function InputSelect({ label, list, value, setValue }) {
  return (
    <FormControl required variant="outlined" fullWidth margin="dense">
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label={label}
      >
        {list.length > 0 &&
          list.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
