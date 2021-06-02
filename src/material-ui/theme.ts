import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const theme = {
  primary: {
    light: '#33C1B1',
    main: '#2BA193',
    dark: '#228176'
  },
  secondary: {
    light: '#F7BC8D',
    main: '#F4A261',
    dark: '#F29040'
  },
  white: {
    light: '#FCF8ED',
    main: '#F9F1DC',
    dark: '#F6EACB',
  },
  error: {
    light: red[100],
    main: red[300],
    dark: red[600],
  }
}

export const MuiTheme = createMuiTheme({
  palette: {
    ...theme
  },
  typography: {
    allVariants: {
      color: '#373842'
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '3.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.75rem',
      }
    },
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          border: "2px solid",
          borderColor: theme.primary.main
        },
        "& $notchedOutline": {
          borderColor: theme.primary.main
        },
        "&$focused $notchedOutline": {
          borderColor: theme.primary.dark
        }
      }
    },
    MuiFormLabel: {
      root: {
        color: theme.primary.main,
        '&$focused': {
          color: theme.primary.dark
        }
      }
    },
    MuiInputBase: {
      root: {
        color: theme.primary.dark,
      }
    },
    MuiFormHelperText: {
      root: {
        color: theme.primary.dark,
        marginTop: '20px'
      },
      contained: {
        marginLeft: '0px',
        marginRight: '0px'
      }
    },
  }
});