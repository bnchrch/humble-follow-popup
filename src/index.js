import React from 'react'
import Modal from 'react-modal'
// import styles from './styles.css'

const HumbleFollowModal = ({modalIsOpen, closeModal, afterOpenModal, customStyles, title}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >

      <h2>{title}</h2>
      <button onClick={closeModal}>Close</button>
    </Modal>)
}

export {HumbleFollowModal}
