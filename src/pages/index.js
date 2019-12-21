import React from 'react'

import Layout from '../components/layouts/main'
import Hero from '../components/hero/hero'
import Box from '../components/box/box'
import WhatWeDo from '../components/what-we-do/what-we-do'
import OurStory from '../components/our-story/our-story'
import SEO from '../components/seo/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Box>
      <WhatWeDo />
    </Box>
    <OurStory />
  </Layout>
)

export default IndexPage
