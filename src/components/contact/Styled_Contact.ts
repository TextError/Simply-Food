import styled from 'styled-components';

const StyledContact = styled.main`
  min-height: var(--minHeight);
  display: flex;
  align-items: center;
  & > section {
    & > form, > article {
      max-width: 400px;
      padding: 20px;
    };
    & > form {
      flex-direction: column;
      & > div, > button{
        margin-top: 10px;
      };
      & > button {
        margin-left: auto;
        min-width: 125px;
      };
    };
  };
`;

export default StyledContact;