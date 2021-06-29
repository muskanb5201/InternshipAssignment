import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import DetailsButtons from "./DetailsButtons";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DescriptionIcon from "@material-ui/icons/Description";

function DetailsCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.status.danger,
      "&$checked": {
        color: theme.status.danger
      }
    },
    checked: {}
  }));

  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#696969"
      }
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <DetailsButtons icon={<CalendarTodayIcon />} data="03 Months" />
        <DetailsButtons icon={<DescriptionIcon />} data="24 Sessions" />
      </ThemeProvider>
    </div>
  );
}

export default DetailsCard;
