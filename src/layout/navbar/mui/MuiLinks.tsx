import React from 'react';
import { Link } from 'gatsby';
import { ListItem } from '@material-ui/core';


const MuiLinks: React.FC = () => (
  <>
    <Link to='/'>
      <ListItem component='li' button>Home</ListItem>
    </Link>
    <Link to='/about'>
      <ListItem component='li' button>About</ListItem>
    </Link>
    <Link to='/recipes'>
      <ListItem component='li' button>Recipes</ListItem>
    </Link>
    <Link to='/contact'>
      <ListItem component='li' button>Contact</ListItem>
    </Link>
  </>
);

export default MuiLinks;