import React from 'react'

import ContactUs from '../contact-us/contact-us'
import OpeningHours from '../opening-hours/opening-hours'
import Map from '../map/map'

import { FlexBox, Container, Credit } from './footer.styles'

const Footer = () => (
  <Container>
    <FlexBox>
      <ContactUs />
      <OpeningHours />
    </FlexBox>
    <Map />
    <Credit>
      Built and designed by Renars for his portfolio.
      <br /> © {new Date().getFullYear()} Renars{' '}
    </Credit>
  </Container>
)

export default Footer
