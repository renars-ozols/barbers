import React from 'react'

import ContactUs from '../contact-us/contact-us'
import OpeningHours from '../opening-hours/opening-hours'
import Map from '../map/map'

const Footer = () => (
  <footer style={{ backgroundColor: `black`, padding: `2rem 0` }}>
    <ContactUs />
    <OpeningHours />
    <Map />
    <p style={{ marginTop: `2rem`, textAlign: `center`, fontSize: `1rem` }}>
      Built and designed by Renars for his portfolio.
    </p>
    <p style={{ marginBottom: `4rem`, textAlign: `center`, fontSize: `1rem` }}>
      © {new Date().getFullYear()} Renars{' '}
    </p>
  </footer>
)

export default Footer
