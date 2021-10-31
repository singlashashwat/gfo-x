import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function InputDate({ label, value, setValue }) {
  const handleDateChange = (date) => {
    setValue(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          fullWidth
          variant="outlined"
          format="MM/dd/yyyy"
          margin="normal"
          label={label}
          value={value}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
            ...{ ["data-testid"]: "js-datepicker" },
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
