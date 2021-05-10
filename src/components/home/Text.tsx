import React from 'react';
import { Typography } from '@material-ui/core';
import StyledText from './Styled_Text';

const Text: React.FC = () => (
  <StyledText>
    <Typography variant='h6' color='primary'>material-ui</Typography>
    <p>styled-components</p>
  </StyledText>
);

export default Text;