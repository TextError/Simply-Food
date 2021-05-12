import styled from 'styled-components';

interface IProps {
  isMobile: boolean
};

const Styled404 = styled.div<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - var(--navbar) - var(--footer));
  background-color: black;
  h1 {
    position: absolute;
    text-shadow: 0 0 10px var(--darkRed);
    font-size: 30vmax;
    font-weight: 500;
    z-index: 0;
  };
  p {
    font-size: 3em;
    font-weight: 500;
    letter-spacing: 3px;
    text-shadow: 0 0 4px var(--white);
    z-index: 10;
  };
  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: var(--darkRed);
    border: 1px solid var(--darkRed);
  };
  @media(max-width: 600px) {
    min-height: calc(100vh - var(--navbar) - var(--footer) - 8px);
  };
  @media(orientation: landscape) {
    min-height: ${({ isMobile }) => isMobile && 'calc(100vh - var(--navbar))'};
  };
`;

export default Styled404;