import React from 'react';
import { Grid, Typography, Box, CardMedia, useMediaQuery } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import { StaticImage } from 'gatsby-plugin-image';

import WebDev from "./WebDev";

import StyledFooter from "./Styled_Footer";

const Footer: React.FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
  return (
    <StyledFooter isMobile={isMobile}>
      <Grid container item sm={4} xs={12} component='section'>
        <CardMedia>
          <StaticImage src='../../assets/profile/me.jpg' alt='author image' height={200} placeholder='blurred' />
        </CardMedia>
        <Grid item>
          { isMobile && <WebDev /> }
          <a href='https://github.com/TextError' target='_blank' aria-label="Github" rel="noreferrer"><i className="fab fa-github" /></a>
          <a href='https://www.linkedin.com/in/raul-calin-savin-22682516b/' target='_blank' aria-label="Linkedin" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </ Grid>
      </Grid>
      <Grid container item sm={8} xs={12} component='section'>
        { !isMobile && <WebDev /> }
        <Box component='article'>
          <Typography><i className="fas fa-globe"></i><a href='https://savin-raul.netlify.app/' target='_blank' rel="noreferrer">https://savin-raul.netlify.app</a></Typography>
          <Typography><i className="fas fa-home" />Reading</Typography>
          <Typography><i className="fas fa-phone" /><a href='tel:+44 789 544 0744'>+44 789 544 0744</a></Typography>
        </Box>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;