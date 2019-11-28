import React, { useState, useEffect } from 'react'
import { throttle } from 'lodash'

import { NavWrapper } from './fixed-nav.styles'

const FixedNav = () => {
  const [visible, setVisible] = useState(false)
  const checkVisible = () => {
    if (window.pageYOffset > 0) setVisible(true)
    else setVisible(false)
  }
  const handler = throttle(checkVisible, 500)

  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  })
  return (
    <NavWrapper visible={visible}>
      <h1>FixedNav</h1>
    </NavWrapper>
  )
}

export default FixedNav
