import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --section-rotate: 9vw;
}

::-moz-selection {
  background-color: #55c57a;
  color: #fff;
}

::selection {
  background-color: #55c57a;
  color: #fff;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  color: #777;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
`;
