import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import { NavWrapper, LeftNav, RightNav, NavLink } from './top-navigation.styles'

const TopNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      menuLinks: site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const links = data.menuLinks.siteMetadata.menuLinks
  return (
    <NavWrapper>
      <LeftNav>
        {links.map(link => (
          <NavLink key={link.name} href={link.link}>
            {link.name}
          </NavLink>
        ))}
      </LeftNav>
      <RightNav>
        <NavLink href="#" aria-label="Link to Facebook page">
          <FaFacebook />
        </NavLink>
        <NavLink href="#" aria-label="Link to Instagram page">
          <FaInstagram />
        </NavLink>
        <NavLink href="#" aria-label="Link to Twitter page">
          <FaTwitter />
        </NavLink>
      </RightNav>
    </NavWrapper>
  )
}

export default TopNavigation
