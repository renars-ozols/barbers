import React from 'react'

import Layout from '../components/layouts/main'
import Hero from '../components/hero/hero'
import Box from '../components/box/box'
import WhatWeDo from '../components/what-we-do/what-we-do'
import OurStory from '../components/our-story/our-story'
import PriceList from '../components/price-list/price-list'
import SEO from '../components/seo/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Box>
      <WhatWeDo />
    </Box>
    <OurStory />
    <Box>
      <PriceList />
    </Box>
  </Layout>
)

export default IndexPage
