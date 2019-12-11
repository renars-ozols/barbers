import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../../themes/main'
import GlobalStyles from '../../utils/global.styles'
import Header from '../header/header'

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]', { speed: 300 })
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </ThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
