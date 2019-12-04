import React from 'react'
import { throttle } from 'lodash'
import { IoIosMenu } from 'react-icons/io'
import { FiMessageSquare } from 'react-icons/fi'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import * as Scroll from 'react-scroll'

import CustomModal from '../modal/modal'
import Menu from '../fixed-nav-menu/fixed-nav-menu'
import { NavWrapper, NavButton } from './fixed-nav.styles'

class FixedNav extends React.PureComponent {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
    this.state = {
      navbarIsVisible: false,
      modalIsOpen: false,
      modalLabel: '',
      modalContent: {},
      modalStyles: {},
    }
  }

  targetRef = React.createRef()
  targetElement = null

  messageStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
      top: '20%',
      left: '10%',
      right: '10%',
      bottom: '20%',
      border: 'none',
    },
  }

  menuStyles = {
    overlay: {
      background: 'red',
    },
    content: {
      top: '50%',
      left: '1rem',
      right: '60%',
      bottom: '5.5rem',
      border: 'none',
    },
  }

  checkVisible = () => {
    if (window.pageYOffset > 0) this.setState({ navbarIsVisible: true })
    else this.setState({ navbarIsVisible: false })
  }

  handler = throttle(this.checkVisible, 500)

  openModal = (content, styles, label) => {
    console.log(this.props)
    if (!this.state.modalIsOpen) {
      disableBodyScroll(this.targetElement)
      this.setState({
        modalIsOpen: true,
        modalLabel: label,
        modalContent: content,
        modalStyles: styles,
      })
    } else if (this.state.modalIsOpen && this.state.modalContent !== content) {
      disableBodyScroll(this.targetElement)
      this.setState(
        {
          modalIsOpen: false,
        },
        () => {
          this.setState({
            modalIsOpen: true,
            modalLabel: label,
            modalContent: content,
            modalStyles: styles,
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
    const {
      navbarIsVisible,
      modalIsOpen,
      modalLabel,
      modalContent,
      modalStyles,
    } = this.state
    const { menuLinks } = this.props
    return (
      <>
        <NavWrapper visible={navbarIsVisible}>
          <NavButton
            style={{ marginRight: `auto` }}
            onClick={() =>
              this.openModal(
                <Menu links={menuLinks} closeModal={this.closeModal} />,
                this.menuStyles,
                'Menu'
              )
            }
          >
            <IoIosMenu />
          </NavButton>

          <NavButton
            onClick={() =>
              this.openModal('message', this.messageStyles, 'Message')
            }
          >
            <FiMessageSquare />
          </NavButton>
          <NavButton name="Back to Top" onClick={this.scrollToTop}>
            <FaArrowAltCircleUp />
          </NavButton>
        </NavWrapper>
        <CustomModal
          targetRef={this.targetRef}
          customStyles={modalStyles}
          closeModal={this.closeModal}
          modalIsOpen={modalIsOpen}
          content={modalContent}
          label={modalLabel}
        />
      </>
    )
  }
}

export default FixedNav
