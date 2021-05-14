import { createMuiTheme } from "@material-ui/core";
import { lightBlue, grey, red } from "@material-ui/core/colors";

const theme = {
  primary: {
    light: lightBlue[100],
    main: lightBlue[300],
    dark: lightBlue[600],
  },
  secondary: {
    light: '#F99C72',
    main: '#F7834F',
    dark: '#C6693F'
  },
  white: {
    light: grey[100],
    main: grey[300],
    dark: grey[600],
  },
  error: {
    light: red[100],
    main: red[300],
    dark: red[600],
  }
};

const MuiTheme = createMuiTheme({
  palette: {
    ...theme
  },
  typography: {
    fontSize: 16
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '3rem',
      },
      h5: {
        fontSize: '1.25rem'
      }
    }
  }
});

MuiTheme.typography.h1 = {
  [MuiTheme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [MuiTheme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
  },
};

MuiTheme.typography.h5 = {
  [MuiTheme.breakpoints.down('sm')]: {
    fontSize: '.9rem',
  },
  [MuiTheme.breakpoints.down('xs')]: {
    fontSize: '.7rem',
  },
};

export { MuiTheme, theme }