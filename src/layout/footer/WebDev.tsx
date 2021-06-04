import React, { memo } from 'react';
import { Typography, Box,} from "@material-ui/core";

const WebDev: React.FC = memo(() => (
  <Box component='div' className='webdev'>
    <Typography>Savin Raul Calin</Typography>
    <Typography>Web Developer</Typography>
  </Box>
));

export default WebDev;