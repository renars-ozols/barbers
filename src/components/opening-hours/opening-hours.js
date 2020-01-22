import React from 'react'
import Heading from '../heading/heading'

import { Group } from './opening-hours.styles'

const OpeningHours = () => (
  <div>
    <Heading
      h4
      center
      noMarginTop
      css={`
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.greyLight1};
      `}
    >
      Opening Hours
    </Heading>
    <Group>
      <div>Monday</div>
      <div>9am - 6pm</div>
    </Group>
    <Group>
      <div>Tuesday</div>
      <div>9am - 6pm</div>
    </Group>
    <Group>
      <div>Wednesday</div>
      <div>9am - 6pm</div>
    </Group>
    <Group>
      <div>Thursday</div>
      <div>9am - 6pm</div>
    </Group>
    <Group>
      <div>Friday</div>
      <div>9am - 7pm</div>
    </Group>
    <Group>
      <div>Saturday</div>
      <div>9am - 8pm</div>
    </Group>
    <Group>
      <div>Sunday</div>
      <div>Closed</div>
    </Group>
  </div>
)

export default OpeningHours
