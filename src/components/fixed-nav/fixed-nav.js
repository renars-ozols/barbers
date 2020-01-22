import React from 'react'
import { throttle } from 'lodash'
import { IoIosMenu } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import * as Scroll from 'react-scroll'

import IconButton from '../icon-button/icon-button'
import CustomModal from '../modal/modal'
import { NavWrapper } from './fixed-nav.styles'

class FixedNav extends React.PureComponent {
  constructor() {
    super()
    this.scrollToTop = this.scrollToTop.bind(this)
    this.state = {
      navbarIsVisible: false,
      modalIsOpen: false,
      modalLabel: '',
    }
  }

  targetRef = React.createRef()
  targetElement = null

  checkVisible = () => {
    if (window.pageYOffset > 0) this.setState({ navbarIsVisible: true })
    else this.setState({ navbarIsVisible: false })
  }

  handler = throttle(this.checkVisible, 500)

  openModal = label => {
    if (!this.state.modalIsOpen) {
      disableBodyScroll(this.targetElement)
      this.setState({
        modalIsOpen: true,
        modalLabel: label,
      })
    } else if (this.state.modalIsOpen && this.state.modalLabel !== label) {
      this.setState(
        {
          modalIsOpen: false,
        },
        () => {
          this.setState({
            modalIsOpen: true,
            modalLabel: label,
          })
        }
      )
    } else this.closeModal()
  }

  closeModal = () => {
    enableBodyScroll(this.targetElement)
    this.setState({ modalIsOpen: false })
  }

  scrollToTop() {
    if (this.state.modalIsOpen) {
      this.closeModal()
      Scroll.animateScroll.scrollToTop({
        smooth: 'easeInOutQuint',
        duration: 1000,
      })
    }
    Scroll.animateScroll.scrollToTop({
      smooth: 'easeInOutQuint',
      duration: 1000,
    })
  }

  componentDidMount() {
    clearAllBodyScrollLocks()
    this.targetElement = this.targetRef.current
    window.addEventListener('scroll', this.handler)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handler)
  }

  render() {
    const { navbarIsVisible, modalIsOpen, modalLabel } = this.state
    return (
      <>
        <NavWrapper visible={navbarIsVisible}>
          <IconButton
            style={{ marginRight: `auto` }}
            onClick={() => this.openModal('Menu')}
          >
            <IoIosMenu />
          </IconButton>

          <IconButton onClick={() => this.openModal('Message')}>
            <FiMail />
          </IconButton>
          <IconButton name="Back to Top" onClick={this.scrollToTop}>
            <FaArrowAltCircleUp />
          </IconButton>
        </NavWrapper>
        <CustomModal
          targetRef={this.targetRef}
          closeModal={this.closeModal}
          modalIsOpen={modalIsOpen}
          label={modalLabel}
        />
      </>
    )
  }
}

export default FixedNav
