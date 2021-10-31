import React from "react";
import { Button } from "@material-ui/core";

export default function InputButton({ label }) {
  return (
    <Button
      color="primary"
      data-testid="button"
      type="submit"
      form="user-modal-form"
      variant="outlined"
    >
      {label}
    </Button>
  );
}
