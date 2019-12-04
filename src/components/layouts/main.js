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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
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
