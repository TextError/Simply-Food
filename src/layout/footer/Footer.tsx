import React from 'react';
import { Grid, Typography, CardMedia, Box, useMediaQuery } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import { StaticImage } from 'gatsby-plugin-image';

import WebDev from "./WebDev";

import StyledFooter from "./Styled_Footer";

const Footer: React.FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
  return (
    <StyledFooter isMobile={isMobile}>
      <Grid container>
        <Grid item sm={4} xs={12}>
          <Box component='div'>
            <CardMedia>
              <StaticImage src='../../assets/profile/me.jpg' alt='author image' height={200} placeholder='blurred' />
            </CardMedia>
            <Grid item>
              { isMobile && <WebDev /> }
              <Box>
                <a href='https://github.com/TextError' target='_blank' rel="noreferrer"><i className="fab fa-github" /></a>
                <a href='https://www.linkedin.com/in/raul-calin-savin-22682516b/' target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </Box>
            </ Grid>
          </Box>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Grid container>
            { !isMobile && <WebDev /> }
            <Box component='div'>
              <Typography component='span'><i className="fas fa-globe"></i><a href='https://savin-raul.netlify.app/' target='_blank' rel="noreferrer">https://savin-raul.netlify.app</a></Typography>
              <Typography><i className="fas fa-home" />Reading</Typography>
              <Typography><i className="fas fa-phone" />0789 544 0744</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;