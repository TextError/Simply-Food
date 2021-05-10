import { createGlobalStyle } from 'styled-components';
import { theme } from '../material-ui/theme';

const Base = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  :root{
    --primary: ${theme.primary.main};
  };
`

export default Base;