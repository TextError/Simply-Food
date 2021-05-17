import styled from 'styled-components';

const StyledHome= styled.main`
  padding: var(--padding);
  header {
    height: 50vh;
    position: relative;
    margin-bottom: var(--padding);
    .card-image {
      height: 100%;
    };
    .card-text {
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 5px;
      padding: var(--padding);
      margin: var(--padding);
      text-align: center;
      color: var(--secondary);

      background-color: rgba(255, 255, 255, .8);
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(0);

      h1 {
        margin-bottom: 10px;
        font-weight: 400
      };
    };
  };

  @media(max-width: 375px) {
    header > .card-text {
      bottom: unset;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
    };
  };

  @media(max-height: 425px) and (orientation: landscape) {
    header > .card-text {
      bottom: unset;
      top: 50%;
      right: 0px;
      transform: translate(0px, -50%);
      margin: 0 var(--padding);
    };
  };
`;

export default StyledHome;