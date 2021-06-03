import React from 'react';
import { Link } from 'gatsby';
import { ListItem } from '@material-ui/core';


const MuiLinks: React.FC = () => (
  <>
    <ListItem component='li' button role='listitem'>Home</ListItem>
    <ListItem component='li' button role='listitem'>About</ListItem>
    <ListItem component='li' button role='listitem'>Recipes</ListItem>
    <ListItem component='li' button role='listitem'>Contact</ListItem>
  </>
);

export default MuiLinks;