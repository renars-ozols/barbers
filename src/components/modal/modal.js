import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import Menu from '../fixed-nav-menu/fixed-nav-menu'
import ContactForm from '../contact-form/contact-form'

Modal.setAppElement(`#___gatsby`)

const CustomModal = ({
  customStyles,
  modalIsOpen,
  closeModal,
  targetRef,
  label,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={label}
        ref={targetRef}
      >
        {label === 'Menu' ? (
          <Menu closeModal={closeModal} />
        ) : (
          <ContactForm closeModal={closeModal} />
        )}
      </Modal>
    </>
  )
}

CustomModal.propTypes = {
  customStyles: PropTypes.object.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  targetRef: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default CustomModal
