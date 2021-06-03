import React from 'react';
import { Link } from 'gatsby';
import { Toolbar, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Mobile from './mobile/Mobile';
import Desktop from './desktop/Desktop';

import AppBar from './Styled_Navbar';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <AppBar position="static" color='primary'>
      <Toolbar component="nav">
        <Link to='/'>logo</Link>
        { isMobile ? <Mobile /> : <Desktop /> }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;