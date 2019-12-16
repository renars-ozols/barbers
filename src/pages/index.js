import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/main'
import Hero from '../components/hero/hero'
import Box from '../components/box/box'
import WhatWeDo from '../components/what-we-do/what-we-do'
import SEO from '../components/seo/seo'
import Content from '../components/content'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Box>
      <WhatWeDo />
      <Link to="/page-2/">Go to page 2</Link>
      <Content />
      <Content />
      <Content />
    </Box>
  </Layout>
)

export default IndexPage
