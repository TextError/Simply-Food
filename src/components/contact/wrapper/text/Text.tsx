import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Text: React.FC = () => (
  <Grid item component='article' sm={6} xs={12}>
    <Typography variant='h1'>Want To Get In Touch?</Typography>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt autem ipsum ipsa laudantium quaerat.</Typography>
    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum debitis expedita cum labore, tempore deleniti eveniet. Quasi saepe nisi veritatis!</Typography>
  </Grid>
)

export default Text;