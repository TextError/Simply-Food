import styled from 'styled-components';

const StyledContact = styled.main`
  min-height: var(--minHeight);
  display: flex;
  align-items: center;
  & > section {
    padding: 30px;
    & > form {
      flex-direction: column;
      & > div, > button{
        margin-top: 5px;
      };
      & > button {
        margin-left: auto;
        min-width: 125px;
      };
    };
  };
`;

export default StyledContact;