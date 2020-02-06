import React, { useState, useRef } from 'react'
import { IoIosPin, IoIosCall, IoIosAt, IoIosGlobe } from 'react-icons/io'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Heading from '../heading/heading'
import CustomModal from '../modal/modal'
import { FiMail } from 'react-icons/fi'

import { BtnMessage, Group } from './contact-us.styles'

const ContactUs = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const targetRef = useRef(null)

  const openModal = () => {
    setModalOpen(true)
    disableBodyScroll(targetRef)
  }
  const closeModal = () => {
    setModalOpen(false)
    enableBodyScroll(targetRef)
  }

  return (
    <div>
      <Heading
        h4
        center
        noMarginTop
        css={`
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.colors.greyLight1};
        `}
        id="contact"
      >
        Contact Us
      </Heading>
      <Group>
        <IoIosPin style={{ marginRight: `1rem` }} />
        <div>256 Some Fake Street, Dublin</div>
      </Group>
      <Group>
        <IoIosCall style={{ marginRight: `1rem` }} />
        <div>+353 1 111 1111</div>
      </Group>
      <Group>
        <IoIosAt style={{ marginRight: `1rem` }} />
        <div>info@barbers.com</div>
      </Group>
      <Group style={{ marginBottom: `2rem` }}>
        <IoIosGlobe style={{ marginRight: `1rem` }} />
        <div>www.yourwebsite.com</div>
      </Group>
      <BtnMessage noRadius onClick={openModal}>
        <FiMail />
        &nbsp; Leave Message
      </BtnMessage>
      <CustomModal
        targetRef={targetRef}
        closeModal={closeModal}
        modalIsOpen={isModalOpen}
        label={'Message'}
      />
    </div>
  )
}

export default ContactUs
