import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { FaArrowCircleDown } from 'react-icons/fa'

import TopNavigation from '../top-navigation/top-navigation'
import FixedNav from '../fixed-nav/fixed-nav'
import { Hero, LogoWrapper, StyledLogo, ArrowLink } from './header.styles'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageStack = [
    data.file.childImageSharp.fluid,
    `linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93))`,
  ].reverse()

  return (
    <>
      <Hero Tag={`header`} fluid={imageStack}>
        <TopNavigation />
        <LogoWrapper>
          <Fade top>
            <StyledLogo />
          </Fade>
        </LogoWrapper>
        <ArrowLink href="#">
          <FaArrowCircleDown />
        </ArrowLink>
      </Hero>
      <FixedNav />
    </>
  )
}

export default Header
