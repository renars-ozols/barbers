import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Heading from '../heading/heading'
import ServicesCard from '../services-card/services-card'

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    query {
      haircut: file(relativePath: { eq: "haircut.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      beardTrim: file(relativePath: { eq: "beard-trim.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      towelShave: file(relativePath: { eq: "towel-shave.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <Heading h2 center marginTop>
        What We Do
      </Heading>
      <ServicesCard
        image={data.haircut.childImageSharp.fixed}
        title="Haircut"
        price="30"
        time="45"
      />
      <ServicesCard
        image={data.beardTrim.childImageSharp.fixed}
        title="Beard & Mustache Trim"
        price="15"
        time="20"
      />
      <ServicesCard
        image={data.towelShave.childImageSharp.fixed}
        title="Hot Towel Shave"
        price="40"
        time="45"
      />
    </div>
  )
}

export default WhatWeDo
