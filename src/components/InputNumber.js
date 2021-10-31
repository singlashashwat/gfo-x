import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputNumber({ label, setAmount, amount }) {
  return (
    <TextField
      label={label}
      margin="dense"
      required
      type="number"
      fullWidth
      value={amount}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(event) => setAmount(event.target.value)}
      variant="outlined"
      error={ amount && amount <= 0 ? true : false}
    />
  );
}
