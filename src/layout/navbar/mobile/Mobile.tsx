import React, { useState } from 'react';
import { List } from '@material-ui/core';

import MuiLinks from '../mui/MuiLinks';


import StyledMobile, { Drawer } from './Styled_Mobile';

const Mobile: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = (e: React.KeyboardEvent | React.MouseEvent): void => {
    if(e.type === 'keydown' && (
      (e as React.KeyboardEvent).key === 'Tab' || 
      (e as React.KeyboardEvent).key === 'Shift'))
      return;

    setOpen(!isOpen);
  };

  return (
    <>
      <StyledMobile onClick={onToggle} data-testid='menu'>
        <span className='top'></span>
        <span className='middle'></span>
        <span className='bottom'></span>
      { isOpen && <div className='caret'><i /></div> }
      </StyledMobile>
      <Drawer open={isOpen} onClose={onToggle}>
        <List onClick={onToggle}>
          <MuiLinks />
        </List>
      </Drawer>
    </>
  );
};

export default Mobile;