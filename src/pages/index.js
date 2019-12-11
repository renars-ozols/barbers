import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/main'
import Hero from '../components/hero/hero'
import Image from '../components/image'
import SEO from '../components/seo/seo'
import Content from '../components/content'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Content />
    <Content />
    <Content />
  </Layout>
)

export default IndexPage
