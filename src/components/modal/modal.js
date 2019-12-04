import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(`#___gatsby`)

const CustomModal = ({
  customStyles,
  modalIsOpen,
  closeModal,
  targetRef,
  content,
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
        <h1>{content}</h1>
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
