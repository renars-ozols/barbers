import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.greyDark2}
  }
`
export default GlobalStyle
