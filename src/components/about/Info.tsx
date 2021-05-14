import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Grid, Typography } from '@material-ui/core';

const Info: React.FC = () => (
  <Grid container component='section' justify='center'>
    <Grid item md={5}>
      <Typography variant='h1'>Lorem ipsum dolor sit amet.</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae culpa accusantium obcaecati nisi ea, id asperiores laborum reprehenderit exercitationem eveniet!</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam unde omnis et nostrum, reprehenderit tempore voluptas quaerat magni natus commodi culpa saepe perferendis labore cum eius quos, molestias pariatur quibusdam enim tenetur autem? Dolor atque quisquam nihil deleniti pariatur.</Typography>
    </Grid>
    <Grid item md={5} container justify='center'>
      <StaticImage src='../../assets/food/about-main.jpg' alt='about-food' height={400} placeholder='blurred' />
    </Grid>
  </Grid>
);

export default Info;