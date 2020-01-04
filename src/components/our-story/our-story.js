import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
//import Fade from 'react-reveal/Fade'

import Heading from '../heading/heading'
import { Background, InnerWrapper, Paragraph } from './our-story.styles'

const OurStory = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "salon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageStack = [
    data.background.childImageSharp.fluid,
    `linear-gradient(rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.8))`,
  ].reverse()
  return <Img fluid={data.background.childImageSharp.fluid} />
}

export default OurStory
