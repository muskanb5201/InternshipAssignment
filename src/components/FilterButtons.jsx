import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FilterButtonItems from "./FilterButtonItems";

function FilterButtons() {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      <Grid item>
        <FilterButtonItems title="All" />
      </Grid>
      <Grid item>
        <FilterButtonItems title="Art" />
      </Grid>
      <Grid item>
        <FilterButtonItems title="Crafts" />
      </Grid>
      <Grid item>
        <FilterButtonItems title="Dance" />
      </Grid>
      <Grid item>
        <FilterButtonItems title="Vocals" />
      </Grid>
    </Grid>
  );
}
export default FilterButtons;
