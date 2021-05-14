import React from 'react';
import { Box, CardMedia, Typography } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';

const Banner: React.FC = () => (
  <CardMedia component='section'>
    <StaticImage 
      src='../../assets/food/home-main.jpg' 
      alt='banner-with-text' 
      placeholder='blurred'
      layout='fullWidth' 
    />
    <Box component='div' className='card'>
      <Typography variant='h1'>Simple & Easy {<br />} Recipes</Typography>
      <Typography variant='h5'>Lorem ipsum dolor sit amet.</Typography>
    </Box>
  </CardMedia>
);

export default Banner;