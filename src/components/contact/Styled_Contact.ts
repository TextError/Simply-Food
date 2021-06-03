import styled from 'styled-components';

const StyledContact = styled.main`
  display: flex;
  align-items: center;
  & > section {
    min-height: var(--minHeight);
    & > form, > article {
      height: 350px;
      max-width: 400px;
      padding: 20px;
    };
    & > article {
      & > h1 {
        margin-bottom: revert;
        color: var(--secondary);
      };
      & > h2 {
        margin-bottom: 20px;
      };
      & > p {
        display: flex;
        & > span {
          padding: 0 5px;
          width: 75px;
        }
        & :hover span {
          color: var(--secondary);
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