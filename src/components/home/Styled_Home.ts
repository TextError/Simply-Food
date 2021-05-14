import styled from 'styled-components';

const StyledHome= styled.main`
  section :nth-of-type(1) {
    position: relative;
    overflow: hidden;
    max-height: 50vh;
    background: rgba(0, 0, 0, .4);
    .card {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      border-radius: 5px;
      padding: var(--padding);
      margin: 0 var(--padding);
      text-align: center;
      color: var(--secondary);

      background-color: rgba(255, 255, 255, .8);
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(0);

      h1 {
        margin-bottom: 10px;
        font-weight: 400
      };
    }
  }
`;

export default StyledHome;