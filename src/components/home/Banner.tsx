import React from 'react';
import { Box, CardMedia, Typography } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';

const Banner: React.FC = () => (
  <CardMedia component='section'>
    <StaticImage src='../../assets/food/home-main.jpg' alt='banner-with-text' height={400} placeholder='blurred' />
    <Box component='div'>
      <Typography variant='h1'>Lorem ipsum dolor sit.</Typography>
    </Box>
  </CardMedia>
);

export default Banner;