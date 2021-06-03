import { createGlobalStyle } from 'styled-components';
import { theme } from '../material-ui/theme';

const Base = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  :root{
    --lightPrimary: ${theme.primary.light};
    --primary: ${theme.primary.main};
    --darkPrimary: ${theme.primary.dark};
    --lightSecondary: ${theme.secondary.light};
    --secondary: ${theme.secondary.main};
    --darkSecondary: ${theme.secondary.dark};
    --lightWhite: ${theme.white.light};
    --white: ${theme.white.main};
    --darkWhite: ${theme.white.dark};
    --lightRed: ${theme.error.light};
    --red: ${theme.error.main};
    --darkRed: ${theme.error.dark};
    --lightBlack: ${theme.black.light};
    --black: ${theme.black.main};
    --darkBlack: ${theme.black.dark};
    --background: ${theme.white.light};
    --navbar: 64px;
    --footer: 188px;
    --transition: .3s;
    --transitionLinear: all .3s linear;
    --minHeight: calc(100vh - var(--navbar) - var(--footer));
    --padding: 24px;
  };

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0px 1000px var(--background) inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--dark);
    -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
  }

  main {
    background-color: var(--background);
  }

  a {
    text-decoration: none;
    color: inherit;
    :hover {
      cursor: pointer;
    };
  }
`

export default Base;