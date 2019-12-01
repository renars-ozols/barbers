import React, { useState, useEffect } from 'react'
import { throttle } from 'lodash'
import { IoIosMenu } from 'react-icons/io'
import { FiMessageSquare } from 'react-icons/fi'
import { FaArrowAltCircleUp } from 'react-icons/fa'

import CustomModal from '../modal/modal'
import { NavWrapper, NavButton } from './fixed-nav.styles'

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
      <NavButton style={{ marginRight: `auto` }}>
        <IoIosMenu />
      </NavButton>
      <CustomModal Button={NavButton}>
        <FiMessageSquare />
      </CustomModal>
      <NavButton>
        <FaArrowAltCircleUp />
      </NavButton>
    </NavWrapper>
  )
}

export default FixedNav
