import React from "react";
import Button from "@material-ui/core/Button";

export default function DetailButtons(props) {
  return (
    <Button variant="text" color="secondary" startIcon={props.icon}>
      {props.data}
    </Button>
  );
}
