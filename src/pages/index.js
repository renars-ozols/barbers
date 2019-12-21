import React from 'react'

import Layout from '../components/layouts/main'
import Hero from '../components/hero/hero'
import Box from '../components/box/box'
import WhatWeDo from '../components/what-we-do/what-we-do'
import OurStory from '../components/our-story/our-story'
import SEO from '../components/seo/seo'
import Content from '../components/content'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Box>
      <WhatWeDo />
    </Box>
    <OurStory />
    <Box>
      <Content />
    </Box>
  </Layout>
)

export default IndexPage
