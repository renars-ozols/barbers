import React from 'react'
import { IoIosPin, IoIosCall, IoIosAt, IoIosGlobe } from 'react-icons/io'

import Heading from '../heading/heading'
import { Group } from './contact-us.styles'

const ContactUs = () => (
  <div>
    <Heading
      h4
      center
      noMarginTop
      css={`
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.greyLight1};
      `}
      id="contact"
    >
      Contact Us
    </Heading>
    <Group>
      <IoIosPin style={{ marginRight: `1rem` }} />
      <div>256 Some Fake Street, Dublin</div>
    </Group>
    <Group>
      <IoIosCall style={{ marginRight: `1rem` }} />
      <div>+353 1 111 1111</div>
    </Group>
    <Group>
      <IoIosAt style={{ marginRight: `1rem` }} />
      <div>info@barbers.com</div>
    </Group>
    <Group>
      <IoIosGlobe style={{ marginRight: `1rem` }} />
      <div>www.yourwebsite.com</div>
    </Group>
  </div>
)

export default ContactUs
