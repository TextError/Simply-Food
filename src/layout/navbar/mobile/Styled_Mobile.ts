import styled from 'styled-components';
import { Drawer as MUIDrawer } from '@material-ui/core';

const StyledMobile = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  :hover {
    cursor: pointer;
  };
  & > span {
    position: absolute;
    width: 100%;
    height: 2px;
    transition: all .3s ease;
    background: var(--white);
  };
  .top {
    top: 0px;
  };
  .middle {
    top: 9px;
  };
  .bottom {
    top: 18px;
  };
  .caret {
    width: 0;
    height: 0;
    position: relative;
    bottom: 6px;
    left: -4px;
    margin-left: 4px;
    display: inline-block;
    border: 16px solid transparent;
    border-left-color: var(--primary);
    animation: slideInRight .3s forwards;
    transform: translateX(-25%);
    -webkit-transform: translateX(-25%);
    -moz-transform: translateX(-25%);
    -ms-transform: translateX(-25%);
    -o-transform: translateX(-25%);
    > i {
      position: absolute;
      left: -16px;
      top: -10px;
      width: 0;
      height: 0;
      display: inline-block;
      border: 10px solid transparent;
      border-left-color: var(--white);
    };
  };
  @keyframes slideInRight {
  100% { 
    transform: translateX(0%);
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
  };
  
};
`;

export const Drawer = styled(MUIDrawer)`
  & > .MuiPaper-root {
    min-width: 150px;
    background-color: var(--lightWhite);
    padding: 50px 20px;
    & a, span {
      color: var(--primary);
    };
    & > ul > a, span {
      & li {
        min-width: 120px;
        display: flex;
        justify-content: center;
      };
    };
  };
`;

export default StyledMobile;