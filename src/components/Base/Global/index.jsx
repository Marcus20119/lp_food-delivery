import { css, createGlobalStyle } from 'styled-components';

const GlobalClasses = css`
  /* Font */
  @font-face {
    font-family: 'Khandy Holand Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Khandy Holand Regular'),
      url('../fonts/KhandyHoland-p75Ev.woff') format('woff');
  }
  /* Reset CSS */
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: overlay;
  }
  body::-webkit-scrollbar {
    width: 18px;
    height: 10px;
    background-color: transparent;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-color: #ffcec9;
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box;
  }
  input,
  textarea {
    outline: none;
  }
  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  a {
    text-decoration: none !important;
  }
  li {
    list-style: none;
  }
  button {
    border: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${GlobalClasses}
`;

export default GlobalStyles;
