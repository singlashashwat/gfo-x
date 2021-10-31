import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextArea({ value, setValue }) {
  return (
    <TextField
      multiline
      fullWidth
      minRows={2}
      maxRows={4}
      value={value}
      inputProps={{ "data-testid": "textarea" }}
        onChange={(event) => setValue(event.target.value)}
      variant="outlined"
      label="Description"
    />
  );
}
