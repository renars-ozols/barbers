import React, { useEffect, useState } from 'react'
import * as Scroll from 'react-scroll'
import { throttle } from 'lodash'
import { IoIosArrowUp } from 'react-icons/io'

import { Button } from './scroll-to-top.styles'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const checkVisible = () => {
    if (window.pageYOffset > 500) setVisible(true)
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
    <Button
      visible={visible}
      onClick={() =>
        Scroll.animateScroll.scrollToTop({
          smooth: 'easeInOutQuint',
          duration: 1000,
        })
      }
    >
      <IoIosArrowUp />
    </Button>
  )
}

export default ScrollToTop
