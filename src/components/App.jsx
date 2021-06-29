import React from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import FilterButtons from "./FilterButtons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import GridBox from "./GridBox";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400]
    }
  },
  secondary: {
    main: "#f9f9f9"
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function App() {
  const [i, setI] = React.useState(0);
  var page = 1;
  var startPost = 0;
  var lastPosition = 3;
  const classes = useStyles();

  function handleClick(page) {
    this.page = page;
    this.startPost = this.props.page * this.state.inFrame;
    this.lastPosition =
      this.props.page * this.state.inFrame + this.state.inFrame;
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <FilterButtons />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <GridBox start={startPost} last={lastPosition} />
        </Grid>
        <div className={classes.root}>
          <Pagination
            count={6}
            color="primary"
            page={page}
            onChange={handleClick}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}
export default App;
