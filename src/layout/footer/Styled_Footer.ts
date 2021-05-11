import styled from 'styled-components';

interface IProps {
  isMobile: boolean
};

const StyledFooter = styled.footer<IProps>`
  background: linear-gradient(to bottom, var(--secondary) 50%, var(--lightWhite) 50%);
  .webdev {
    color: var(--lightWhite);
    ${({ isMobile }) => isMobile && `
      h6, p {
        padding-left: 5px;
      }
      p {
        margin-bottom: 6px;
      }
    `}
  };
  & > .MuiGrid-container > .MuiGrid-item {
    padding: 8px 0 8px 6px;
    min-height: 86px;
    & > .MuiBox-root {
      display: flex;
      & > .MuiCardMedia-root {
        width: ${({ isMobile }) => isMobile ? '86px' : '100px'};
        height: ${({ isMobile }) => isMobile ? '86px' : '100px'};
        background-position: top;
        margin-right: var(--padding);
        border-radius: 5px;
      };
      & > .MuiGrid-item {
        display: flex;
        flex-direction: column;
        justify-content: ${({ isMobile }) => isMobile ? 'center' : 'flex-end'};
        a {
          font-size: 1.5em;
          margin: auto 5px 0;
          color: ${({ isMobile }) => isMobile ? 'var(--lightWhite)' : 'var(--secondary)'};
          :hover {
            color: var(--primary);
          };
        };
      };
    };
  };
  & > .MuiGrid-container > .MuiGrid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    & > .MuiGrid-container {
      max-width: 250px;
      justify-content: center;
      & > div:nth-child(1) {
        padding-bottom: 8px;
      };
      & > div:nth-child(2) {
        padding-top: 8px;
      };
      & > .MuiBox-root {
        min-height: 86px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      };
      & span, p {
        display: flex;
        align-items: center;
      };
      & span {
        min-height: 24px;
      };
      i {
        width: 20px;
        display: flex;
        justify-content: center;
        color: var(--secondary);
        margin-right: 12px; 
      };
    };
  };
`;

export default StyledFooter;