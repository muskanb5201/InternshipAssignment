import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import DetailsCard from "./DetailsCard";
import Rating from "@material-ui/lab/Rating";
import CardData from "./CardData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    margin: 10,
    maxWidth: 300,
    minHeight: 400,
    padding: 10,
    borderRadius: 10
  },
  media: {
    height: 200,
    borderRadius: 8
  },
  button: {
    margin: 5,
    alignItems: "bottom"
  }
}));

const theme = createMuiTheme({
  secondary: {
    color: "gray"
  }
});

export default function MediaCard(props) {
  const value = 5;
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.img} title="Dance">
            <Box alignContent="flex-end">
              <Button
                color="secondary"
                size="small"
                variant="contained"
                className={classes.button}
              >
                {props.sessionType}
              </Button>
              {props.yesNo && (
                <Button color="primary" size="small" variant="contained">
                  {props.extraDetails}
                </Button>
              )}
            </Box>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Box fontSize={20} fontWeight="fontWeightBold">
                {props.title}
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>

        <DetailsCard className={classes.detailCard} color="secondary" />
        <Box component="fieldset" borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
        </Box>

        <CardData />

        <CardActions>
          <Box fontSize={15} fontWeight="fontWeightBold">
            13,999 INR
          </Box>
          <Box fontSize={15} fontWeight="fontWeightBold" fontColor="#f9f9f9">
            2̶4̶,̶9̶9̶9̶ ̶I̶N̶R̶
          </Box>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
