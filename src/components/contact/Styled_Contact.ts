import styled, { css } from 'styled-components';

interface IProps {
  isBreakpointSX: boolean
};

const StyledContact = styled.main<IProps>`
  display: flex;
  align-items: center;
  & > section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height: var(--minHeight);
    padding: ${({ isBreakpointSX }) => isBreakpointSX ? '20px 10px' : '20px'};
    & > form, > article {
      height: 350px;
      max-width: 400px;
      width: 100%;
      padding: 20px;
    };
    & > article {
      ${({ isBreakpointSX }) => isBreakpointSX && css`
        height: 100%;
        padding: 20px 10px;
      `};
      & > h1 {
        margin-bottom: revert;
      };
      & > h2 {
        margin-bottom: 20px;
        font-weight: 400;
        width: fit-content;
        :after {
          content: '';
          height: 1px;
          width: 75%;
          display: block;
          margin: auto;
          background-color: var(--secondary);
        };
      };
      & > p {
        margin-bottom: ${({ isBreakpointSX }) => isBreakpointSX ? '15px' : '5px'};
        display: flex;
        &:nth-of-type(1) {
          text-align-last: center;
        };
        & > a {
          width: 100%;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        };
        & > span {
          padding: 0 5px;
          max-width: 75px;
          width: 100%;
        };
      };
    };
    & > form {
      flex-direction: column;
      & > div, > button {
        margin-top: 10px;
      };
      & > button {
        margin-left: auto;
        margin-bottom: revert;
        min-width: 125px;
      };
    };
  };
`;

export default StyledContact;