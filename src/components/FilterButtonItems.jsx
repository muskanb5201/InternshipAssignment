import React from "react";
import Button from "@material-ui/core/Button";

function FilterButtonItems(props) {
  return (
    <Button variant="contained" color="primary">
      {props.title}
    </Button>
  );
}
export default FilterButtonItems;
