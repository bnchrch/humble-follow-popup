import React, { Component } from 'react'
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

import {HumbleFollowModal} from 'humble-follow-popup';

const MESSAGE_TEXT = `
Hey, thanks so much for reading!

My goal to 2020 is to simply make other developers lives easier. This goal is directly affected by how many people know about what I'm doing.

So if you enjoyed the content so far I would be thrilled if you [followed me somewhere](https://www.producthunt.com/@bnchrch), anywhere.

Don't worry though! This is not a shakedown! You can close this pop up. No penalty. and I wont ask again.

Thanks again for reading and I'm always open to DM's so feel free to message me directly anytime.
`

const SOCIAL_ACCOUNTS = {
  productHunt: 'https://www.producthunt.com/@bnchrch',
  twitter: 'https://twitter.com/bnchrch',
  indieHackers: 'https://www.indiehackers.com/bnchrch/',
}

const AppPure = ({modalIsOpen, closeModal, openModal, text}) => {
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <HumbleFollowModal
        closeModal={closeModal}
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        title='👋 One humble request from an Indie Dev'
        closeText='Thanks, but no thanks'
        messageText={MESSAGE_TEXT}
        socialAccounts={SOCIAL_ACCOUNTS}
      />
    </div>
  )
}

const withModalState = compose(
  withState('modalIsOpen', 'setModalOpen', true),
  withProps(({setModalOpen}) => ({
    closeModal: () => setModalOpen(false),
    openModal: () => setModalOpen(true)
  }))
)

const App = withModalState(AppPure)

export default App;
