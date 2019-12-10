import React from 'react'

import { Button } from './icon-button.styles'

const IconButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default IconButton
