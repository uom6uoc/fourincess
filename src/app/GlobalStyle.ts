import { createGlobalStyle, css } from 'styled-components';

const rootVariable = css`
  /* CSS variable   */
  :root {
    /* color */
    --color-pink: #ffc7d4;
    --color-deep-pink: #ff7d9c;
    --color-dark-red: #df2250;
    --color-sky-blue: #ecf8ff;
    --color-light-blue: #aed8ff;
    --color-blue: #4d7aed;
    --color-deep-blue: #0d298a;
    --color-indigo: #11172d;
    --color-line-color: #a2afbd;
    --color-light-gray: #e8e9f1;
    --color-white: #ffffff;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${rootVariable};
  #root {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
  }
`;

export default GlobalStyle;
