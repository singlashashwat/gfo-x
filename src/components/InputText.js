import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText({ value, label, setValue, type }) {
  return (
    <TextField
      required
      value={value}
      label={label}
      variant="outlined"
      fullWidth
      onChange={(event) => setValue(event.target.value)}
      type={type}
    />
  );
}
