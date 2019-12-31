import React from 'react'

import { Container, BgImage, Overlay } from './background.styles'

const Background = ({ image, children }) => (
  <Container>
    <BgImage fluid={image} />
    <Overlay>{children}</Overlay>
  </Container>
)

export default Background
