import styled from 'styled-components';
import { AppBar as MUIAppBar } from '@material-ui/core';

const AppBar = styled(MUIAppBar)`
  & > .MuiToolbar-root {
    display: flex;
    justify-content: space-between;
    & > a {
      display: flex;
    };
    & > ul > li {
      height: 100%;
      min-width: 120px;
      display: flex;
      justify-content: center;
    };
  };
  & > nav > svg {
    :hover {
      cursor: pointer
    };
  };
`;

export default AppBar;