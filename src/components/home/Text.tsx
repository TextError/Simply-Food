import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { state_number } from '../../redux/selectors/number';
import { decrement, increment, reset } from '../../redux/actions/number';

import StyledText from './Styled_Text';

const Text: React.FC = () => {
  const dispatch = useDispatch();
  const number = useSelector(state_number);

  const toIncrement = () => dispatch(increment(number + 1));
  const toDecrement = () => dispatch(decrement(number - 1));
  const toReset = () => dispatch(reset());

  return (
    <StyledText>
      <Typography variant='h6' color='primary'>material-ui</Typography>
      <p>styled-components</p>
      <span>Redux state is: {number}</span>
      <Button onClick={toIncrement}>+</Button>
      <Button onClick={toDecrement}>-</Button>
      <Button onClick={toReset}>reset</Button>
    </StyledText>
  );
};

export default Text;