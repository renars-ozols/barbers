import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { StyledNav, StyledLink } from './fixed-nav-menu.styles'

const Menu = ({ closeModal }) => {
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
    <StyledNav>
      {links.map(link => (
        <StyledLink key={link.name} href={link.link} onClick={closeModal}>
          {link.name}
        </StyledLink>
      ))}
    </StyledNav>
  )
}

Menu.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default Menu
