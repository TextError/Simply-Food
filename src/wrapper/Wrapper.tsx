import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { MuiTheme } from '../material-ui/theme';

import Base from '../styled-components/Base';

export const Wrapper: React.FC<IProps> = ({ element }) => (
  <ThemeProvider theme={MuiTheme}>
    <CssBaseline />
    <Base />
    {element}
  </ThemeProvider>
);

interface IProps {
  element: React.ReactElement
};