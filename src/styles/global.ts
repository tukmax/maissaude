import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 16px;

  }
  #root {
    font-family: Roboto, sans-serif;
    color: #1c5e52;
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

`;
