import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "white",
  },
  toggleButton: {
    borderColor: "black",
    "&.Mui-selected": {
      color: "#FFF",
      backgroundColor: "purple",
      "&:hover": {
        backgroundColor: "purple",
      },
    },
  },
}));

export default function ToggleButtons({ alignment, handleAlignment }) {
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={alignment}
      size="small"
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton
        value="accounts"
        classes={{ label: classes.label, root: classes.toggleButton }}
      >
        Accounts
      </ToggleButton>
      <ToggleButton
        value="transfer"
        classes={{ label: classes.label, root: classes.toggleButton }}
      >
        Transfer
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
