import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Text: React.FC = () => (
  <Grid component='article' xs={12} item >
    <Typography variant='h1'>Hello!</Typography>
    <Typography variant='h2'>Get in Touch</Typography>
    <Typography>Feel free to contact me via email or social media.</Typography>
    <Typography>
      <span>⟶&nbsp;</span>
      Email:
      <span><a href="mailto:texterror401@gmail.com">texterror401@gmail.com</a></span>
    </Typography>
    <Typography>
      <span>⟶&nbsp;</span>
      Github:
      <span><a href='https://github.com/TextError' target='_blank' rel="noreferrer">https://github.com/TextError</a></span>
    </Typography>
    <Typography>
      <span>⟶&nbsp;</span>
      Linkedin:
      <span><a href='https://www.linkedin.com/in/raul-calin-savin-22682516b/' target='_blank' rel="noreferrer"></a></span>
    </Typography>
  </Grid>
)

export default Text;