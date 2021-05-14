import styled from 'styled-components';

const StyledHome= styled.main`
  section :nth-of-type(1) {
    position: relative;
    .card {
      position: absolute;
      bottom: 0;
      right: 0;
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
    }
  }
`;

export default StyledHome;