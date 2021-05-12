import styled from 'styled-components';
import { AppBar as MUIAppBar } from '@material-ui/core';

const AppBar = styled(MUIAppBar)`
  & > .MuiToolbar-root {
    display: flex;
    justify-content: space-between;
    & > ul > a, span {
      & li {
        min-width: 120px;
        display: flex;
        justify-content: center;
      };
    };
  };
  & > nav > svg {
    :hover {
      cursor: pointer
    };
  }
`;

export default AppBar;