import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ links, closeModal }) => {
  return (
    <nav>
      {links.map(link => (
        <Link key={link.name} to={link.link} onClick={closeModal}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
