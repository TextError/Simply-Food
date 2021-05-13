import React from 'react';

import { Grid, Typography } from '@material-ui/core';

const Info: React.FC = () => (
  <Grid container component='section' justify='center'>
    <Grid item md={5}>
      <Typography variant='h1'>Lorem ipsum dolor sit amet.</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae culpa accusantium obcaecati nisi ea, id asperiores laborum reprehenderit exercitationem eveniet!</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quia ex. Nemo, porro.</Typography>
    </Grid>
    <Grid item md={5}>image here</Grid>
  </Grid>
);

export default Info;