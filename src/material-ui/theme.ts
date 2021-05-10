import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    }
  },
  overrides: {}
});

export default theme;