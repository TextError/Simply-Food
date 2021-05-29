import React from 'react';
import { Grid } from '@material-ui/core';

import Text from './text/Text';
import Form from './form/Form';

const Wrapper: React.FC = () => (
  <Grid container>
    <Grid item sm={6} xs={12}>
      <Text />
    </Grid>
    <Grid item sm={6} xs={12}>
      <Form />
    </Grid>
  </Grid>
);

export default Wrapper;