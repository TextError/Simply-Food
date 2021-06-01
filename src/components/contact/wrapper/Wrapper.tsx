import React from 'react';
import { Grid } from '@material-ui/core';

import Text from './text/Text';
import Form from './form/Form';

const Wrapper: React.FC = () => (
  <Grid component='section' container alignItems='center' justify='center'>
    <Text />
    <Form />
  </Grid>
);

export default Wrapper;