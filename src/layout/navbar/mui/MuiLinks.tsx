import React, { memo } from 'react';
import { Link } from 'gatsby';
import { ListItem } from '@material-ui/core';


const MuiLinks: React.FC = memo(() => (
  <>
    <ListItem component='li' button role='listitem'><Link to='/'>Home</Link></ListItem>
    <ListItem component='li' button role='listitem'><Link to='/about'>About</Link></ListItem>
    <ListItem component='li' button role='listitem'><Link to='/recipes'>Recipes</Link></ListItem>
    <ListItem component='li' button role='listitem'><Link to='/contact'>Contact</Link></ListItem>
  </>
));

export default MuiLinks;