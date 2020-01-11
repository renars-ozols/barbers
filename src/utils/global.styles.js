import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-backface-visibility:hidden;
    -moz-backface-visibility:hidden;
    -ms-backface-visibility:hidden;
    -o-backface-visibility:hidden;
    backface-visibility:hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.greyDark2};
  }
`
export default GlobalStyle
