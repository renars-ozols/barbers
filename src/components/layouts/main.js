import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../../themes/main'
import GlobalStyles from '../../utils/global.styles'
import Header from '../header/header'
import ScrollToTop from '../scroll-to-top/scroll-to-top'
import Footer from '../footer/footer'

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
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
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
