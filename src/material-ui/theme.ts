import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const theme = {
  primary: {
    main: green[500],
  }
}

export const MuiTheme = createMuiTheme({
  palette: {
    ...theme
  },
  overrides: {}
});