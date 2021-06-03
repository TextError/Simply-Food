import styled from 'styled-components';

interface IProps {
  isMobile: boolean
};

const StyledFooter = styled.footer<IProps>`
  ${({ isMobile }) => !isMobile && 'display: flex;'}
  height: 190px;
  align-items: center;
  background: linear-gradient(to bottom, var(--darkSecondary) 50%, var(--background) 50%);
  .webdev > p {
    color: var(--lightWhite);
    ${({ isMobile }) => isMobile &&  'padding-left: 5px'};
    :nth-of-type(1) {
      font-size: 1.25rem;
    };
  };
  & > section :nth-of-type(1) {
    height: ${({ isMobile }) => isMobile ? '95px' : '110px'};
    padding: 5px;
    justify-content: center;
    & > .MuiCardMedia-root {
      width: ${({ isMobile }) => isMobile ? '85px' : '100px'};
      height: ${({ isMobile }) => isMobile ? '85px' : '100px'};
      background-position: top;
      margin-right: var(--padding);
      border-radius: 5px;
      overflow: hidden;
    };
    & > .MuiGrid-item {
      display: ${({ isMobile }) => isMobile ? 'block' : 'flex'};
      justify-content: ${({ isMobile }) => isMobile ? 'flex-end' : 'center'};
      a {
        font-size: 1.5em;
        margin: auto 5px 0;
        color: ${({ isMobile }) => isMobile ? 'var(--lightWhite)' : 'var(--primary)'};
        :hover {
          color: ${({ isMobile }) => isMobile ? 'var(--primary)' : 'var(--darkSecondary)'};
        };
      };
    };
  };

  & > section:nth-last-of-type(1) {
    flex-direction: column;
    align-items: center;
    height: ${({ isMobile }) => isMobile ? '95px' : '190px'};
    & > div, article {
      height: 95px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    };
    & > article {
      width: 260px;
      & > p {
        display: flex;
        align-items: center;
        :nth-of-type(1) {
          min-height: 24px;
        };
        :nth-of-type(1):hover > i, :nth-last-of-type(1):hover > i {
          color: var(--darkSecondary);
        };
        & > i {
          width: 20px;
          display: flex;
          justify-content: center;
          color: var(--darkPrimary);
          margin-right: 12px; 
        };
      };
    };
  };
`

export default StyledFooter;