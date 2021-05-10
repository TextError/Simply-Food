import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { state_number } from '../../redux/selectors/number';

import StyledText from './Styled_Text';

const Text: React.FC = () => {
  const number = useSelector(state_number);

  return (
    <StyledText>
      <Typography variant='h6' color='primary'>material-ui</Typography>
      <p>styled-components</p>
      <span>Redux state is: {number}</span>
    </StyledText>
  );
};

export default Text;