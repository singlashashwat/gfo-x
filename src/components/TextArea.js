import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextArea({ value, setValue }) {
  return (
    <TextField
      multiline
      fullWidth
      data-testid="textarea"
      minRows={2}
      maxRows={4}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      variant="outlined"
      label="Description"
    />
  );
}
