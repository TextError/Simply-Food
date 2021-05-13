import styled from 'styled-components';

const StyledAbout = styled.main`
  padding: var(--padding);
  & > section {
    & :nth-of-type(1) > .MuiGrid-item {
      max-width: 400px;
      width: 100%;
      padding: var(--padding);
      & h1, p {
        margin-bottom: var(--padding);
      };
      & h1 {
        text-align: center;
      };
      & p {
        line-height: 26px;
        text-align: justify;
        text-align-last: center;
      };
    };
  };

  @media(max-width: 960px) {
    & > section {
      & :nth-of-type(1) > .MuiGrid-item {
        padding: var(--padding) 0;
      }
    }
  }
`;

export default StyledAbout;