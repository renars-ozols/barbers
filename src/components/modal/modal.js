import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

Modal.setAppElement(`#___gatsby`)

const CustomModal = ({ Button, children }) => {
  const [modalIsOpen, setOpen] = useState(false)
  const closeModal = () => {
    setOpen(false)
    enableBodyScroll(targetRef)
  }
  const targetRef = useRef(null)
  const check = () => {
    modalIsOpen ? disableBodyScroll(targetRef) : enableBodyScroll(targetRef)
  }
  return (
    <>
      <Button
        onClick={() => {
          setOpen(!modalIsOpen)
          modalIsOpen
            ? enableBodyScroll(targetRef)
            : disableBodyScroll(targetRef)
        }}
      >
        {children}
      </Button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        contentLabel="modal"
        ref={targetRef}
      >
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </h1>
      </Modal>
    </>
  )
}

export default CustomModal
