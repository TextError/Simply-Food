import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const theme = {
  primary: {
    light: '#352b27cc',
    main: '#352b27e6',
    dark: '#362c28'
  },
  secondary: {
    light: '#718355cc',
    main: '#718355e6',
    dark: '#718355'
  },
  white: {
    light: '#f5f3f4',
    main: '#f5f3f4',
    dark: '#f5f3f4',
  },
  black: {
    light: '#161a1d80',
    main: '#161a1dbf',
    dark: '#161a1d'
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
      color: theme.black.dark
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
          border: `2px solid ${theme.black.light}`,
        },
        "& $notchedOutline": {
          borderColor: theme.black.light
        },
        "&$focused $notchedOutline": {
          borderColor: theme.black.light
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1rem',
        color: theme.black.main,
        '&$focused': {
          color: theme.black.main
        }
      }
    },
    MuiInputBase: {
      root: {
        color: theme.black.dark,
      }
    },
    MuiFormHelperText: {
      root: {
        color: theme.black.main,
        marginTop: '20px'
      },
      contained: {
        marginLeft: '0px',
        marginRight: '0px'
      }
    },
    MuiButton: {
      outlinedPrimary: {
        border: `1px solid ${theme.black.main}`,
        color: theme.black.dark,
        "&:hover": {
          borderColor: theme.secondary.dark,
          backgroundColor: theme.secondary.dark,
          color: theme.white.light
        }
      }
    }
  }
});