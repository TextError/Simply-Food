import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { MuiTheme } from '../material-ui/theme';

import Base from '../styled-components/Base';

import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const Wrapper: React.FC<IProps> = ({ element }) => (
  <ThemeProvider theme={MuiTheme}>
    <CssBaseline />
    <Base />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

interface IProps {
  element: React.ReactElement
};