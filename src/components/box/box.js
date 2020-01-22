import React from 'react'

import { Container } from './box.styles'

const Box = ({ className, children }) => (
  <Container className={className}>{children}</Container>
)

export default Box
