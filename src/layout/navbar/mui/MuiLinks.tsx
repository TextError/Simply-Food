import React from 'react';
import { Link } from 'gatsby';
import { ListItem } from '@material-ui/core';


const MuiLinks: React.FC = () => (
  <>
    <Link to='/a'>
      <ListItem component='li' button>a</ListItem>
    </Link>
    <Link to='/b'>
      <ListItem component='li' button>b</ListItem>
    </Link>
    <Link to='/c'>
      <ListItem component='li' button>c</ListItem>
    </Link>
    <Link to='/d'>
      <ListItem component='li' button>d</ListItem>
    </Link>
  </>
);

export default MuiLinks;