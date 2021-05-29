import React from 'react';
import { Grid } from '@material-ui/core';

import Text from './text/Text';
import Form from './form/Form';

const Wrapper: React.FC = () => (
  <Grid container component='section'>
    <Text />
    <Form />
  </Grid>
);

export default Wrapper;