import React from "react";
import Card from "./Card";
import cardData from "../CardData";
import Grid from "@material-ui/core/Grid";

class GridBox extends React.Component {
  render() {
    var rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(
        <Grid item xs={12} lg={4}>
          <Card
            key={cardData[i].id}
            title={cardData[i].title}
            data={cardData[i].data}
            img={cardData[i].img}
            sessionType={cardData[i].sessionType}
            extraDetails={cardData[i].extraDetails}
            yesNo={cardData[i].yesNo}
          />
        </Grid>
      );
    }

    return rows;
  }
}
export default GridBox;
