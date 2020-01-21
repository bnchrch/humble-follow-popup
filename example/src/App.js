import React, { Component } from 'react'
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

import {HumbleFollowModal} from 'humble-follow-popup';

const AppPure = ({modalIsOpen, closeModal, openModal, text}) => {
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <HumbleFollowModal
        closeModal={closeModal}
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        title='👋 One humble request from an Indie Dev'
      />
    </div>
  )
}

const withModalState = compose(
  withState('modalIsOpen', 'setModalOpen', false),
  withProps(({setModalOpen}) => ({
    closeModal: () => setModalOpen(false),
    openModal: () => setModalOpen(true)
  }))
)

const App = withModalState(AppPure)

export default App;
