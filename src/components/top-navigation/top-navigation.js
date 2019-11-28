import React from 'react'
import { Link } from 'gatsby'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import { NavWrapper, LeftNav, RightNav, NavLink } from './top-navigation.styles'

const TopNavigation = () => (
  <NavWrapper>
    <LeftNav>
      <NavLink as={Link} to="#">
        Link1
      </NavLink>
      <NavLink as={Link} to="#">
        Link2
      </NavLink>
      <NavLink as={Link} to="#">
        Link3
      </NavLink>
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

export default TopNavigation
