import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import Heading from '../heading/heading'
import ServicesCard from '../services-card/services-card'
import { Wrapper } from './what-we-do.styles'

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    query {
      haircut: file(relativePath: { eq: "haircut.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      beardTrim: file(relativePath: { eq: "beard-trim.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      towelShave: file(relativePath: { eq: "towel-shave.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      kidsCuts: file(relativePath: { eq: "kids-cuts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section>
      <Heading
        h2
        center
        css={`
          margin: 8rem 0;
        `}
        id="about"
      >
        What We Do
      </Heading>
      <Wrapper>
        <Fade left>
          <ServicesCard
            image={data.haircut.childImageSharp.fluid}
            title="Haircut"
            price="30"
            time="45"
          />
          <ServicesCard
            image={data.beardTrim.childImageSharp.fluid}
            title="Beard & Mustache Trim"
            price="15"
            time="20"
          />
          <ServicesCard
            image={data.towelShave.childImageSharp.fluid}
            title="Hot Towel Shave"
            price="40"
            time="45"
          />

          <ServicesCard
            image={data.kidsCuts.childImageSharp.fluid}
            title="Kids Cuts"
            price="15"
            time="30"
          />
        </Fade>
      </Wrapper>
      <Heading
        h5
        center
        css={`
          margin-bottom: 8rem;
        `}
      >
        For full service & price list click{' '}
        <a
          href="/#pricelist"
          css={`
            color: currentColor;
          `}
        >
          here
        </a>
      </Heading>
    </section>
  )
}

export default WhatWeDo
