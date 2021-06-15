import React, { memo } from 'react';
import { navigate } from 'gatsby';
import { ListItem } from '@material-ui/core';


const MuiLinks: React.FC = memo(() => (
  <>
    <ListItem component='li' button role='listitem' onClick={() => navigate('/')}>Home</ListItem>
    <ListItem component='li' button role='listitem' onClick={() => navigate('/about')}>About</ListItem>
    <ListItem component='li' button role='listitem' onClick={() => navigate('/recipes')}>Recipes</ListItem>
    <ListItem component='li' button role='listitem' onClick={() => navigate('/contact')}>Contact</ListItem>
  </>
));

export default MuiLinks;