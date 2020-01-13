import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
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
          <NavLink as={Link} key={link.name} to={link.link}>
            {link.name}
          </NavLink>
        ))}
      </LeftNav>
      <RightNav>
        <NavLink href="#">
          <FaFacebook />
        </NavLink>
        <NavLink href="#">
          <FaInstagram />
        </NavLink>
        <NavLink href="#">
          <FaTwitter />
        </NavLink>
      </RightNav>
    </NavWrapper>
  )
}

export default TopNavigation
