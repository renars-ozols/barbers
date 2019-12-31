import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaArrowCircleDown } from 'react-icons/fa'

import { Container, Overlay, BgImage } from './bg.styles'

const Bg = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Container>
      <BgImage fluid={data.background.childImageSharp.fluid} />
      <Overlay>
        <p style={{ fontSize: '3rem' }}>Fsss Hija</p>
      </Overlay>
    </Container>
  )
}

export default Bg
