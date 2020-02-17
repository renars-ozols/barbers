import React from 'react'
import { FaEuroSign, FaRegClock } from 'react-icons/fa'

import {
  Container,
  StyledImg,
  Title,
  Feature,
  Btn,
} from './services-card.styles'

const ServicesCard = ({ image, price, time, title }) => (
  <Container>
    <StyledImg
      fluid={image}
      alt={title}
      style={{
        width: `100%`,
        gridRow: `1 / 2`,
        gridColumn: `1 / -1`,
      }}
    />
    <Title h5 uppercase noMarginBottom noMarginTop center>
      {title}
    </Title>
    <Feature>
      <FaEuroSign />
      &nbsp;
      <p>{price}</p>
    </Feature>
    <Feature>
      <FaRegClock />
      &nbsp;
      <p
        css={`
          margin-left: 3px;
        `}
      >
        {time}min
      </p>
    </Feature>
    <Btn
      noRadius
      noShadow
      css={`
        grid-column: 1 / -1;
        padding: 1rem;
      `}
    >
      Book Now
    </Btn>
  </Container>
)

export default ServicesCard
