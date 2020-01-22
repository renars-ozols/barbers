import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import Menu from '../fixed-nav-menu/fixed-nav-menu'
import ContactForm from '../contact-form/contact-form'

Modal.setAppElement(`#___gatsby`)

const CustomModal = ({ modalIsOpen, closeModal, targetRef, label }) => {
  const getStyles = label => {
    let styles = {}
    if (label === 'Menu') {
      styles = {
        overlay: {
          background: 'transparent',
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          background: '#c69963',
          top: '60%',
          left: '1rem',
          right: '50%',
          bottom: '5.5rem',
          border: 'none',
        },
      }
    } else if (label === 'Message') {
      styles = {
        overlay: {
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: '200',
        },
        content: {
          top: '10%',
          left: '10%',
          right: '10%',
          bottom: '10%',
          border: 'none',
          overflow: 'visible',
          padding: '0',
          margin: '0 auto',
          maxHeight: '50rem',
          maxWidth: '150rem',
        },
      }
    }
    return styles
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={getStyles(label)}
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
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  targetRef: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default CustomModal
