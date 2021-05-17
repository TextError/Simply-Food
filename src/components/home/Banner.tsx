import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';

const Banner: React.FC = () => (
  <header>
    <StaticImage 
      src='../../assets/food/home-main.jpg' 
      alt='banner-with-text' 
      className='card-image' 
      placeholder='blurred'
      layout='fullWidth'
    />
    <Box component='div' className='card-text'>
      <Typography variant='h1'>Simple & Easy {<br />} Recipes</Typography>
      <Typography variant='h5'>Lorem ipsum dolor sit amet.</Typography>
    </Box>
  </header>
);

export default Banner;