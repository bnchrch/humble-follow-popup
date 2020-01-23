import React from 'react'
import Modal from 'react-responsive-modal'

import debounce from 'lodash/fp/debounce'

import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'
import withProps from 'recompose/withProps'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'

import Cookies from 'universal-cookie'

import styles from './styles.css'

import CloseIcon from './components/icons/CloseIcon'
import Header from './components/Header'
import SocialMediaCTAs from './components/SocialMediaCTAs'
import Message from './components/Message'

import {getScrollPosition} from './util'

/*
  🛠 UTIL
*/

const cookies = new Cookies()
const branchOnType = (typeToFind, component) => branch(({type}) => type === typeToFind, renderComponent(component))

/*
TODO
- ensure that the css is prefixed but not uniqified
- remove css modules
- find an auto css prefixer
*/

/*
  🖼 MODAL
*/

const CLASSES = {
  modal: 'modalContent',
  closeButton: 'closeButton'
}

const HumbleFollowModal = ({
  modalIsOpen,
  closeModal,
  title,
  messageText,
  socialAccounts,
  closeText
}) => {
  return (
    <Modal
      open={modalIsOpen}
      onClose={closeModal}
      classNames={CLASSES}
      closeIconSvgPath={<CloseIcon />}
    >
      <Header title={title} />
      <div className={styles.body}>
        <Message messageText={messageText} closeModal={closeModal} closeText={closeText} />
        <SocialMediaCTAs socialAccounts={socialAccounts} />
      </div>
      <button className={styles.messageButton} onClick={closeModal}>{closeText}</button>
    </Modal>)
}

/*
  🎊 HOCs
*/

const withModalState = compose(
  withState('modalIsOpen', 'setModalOpen', false),
  withProps(({setModalOpen}) => ({
    closeModal: () => setModalOpen(false),
    openModal: () => setModalOpen(true)
  }))
)

const withCookieDisable = withProps(({openModal}) => ({
  openModal: () => {
    const cookieId = 'HasSeenHumbleModal'
    const hasSeenHumbleModal = cookies.get(cookieId)

    if (!hasSeenHumbleModal) {
      cookies.set(cookieId, true, { path: '/' })
      openModal()
    }
  }
}))

/*
  🔫 Modal Triggers
*/

const HumbleFollowScroll = compose(
  withModalState,
  withCookieDisable,
  lifecycle({
    componentDidMount() {
      const debounceWindow = this.props.debouce || 500
      const scrollPerecentageTrigger = this.props.scrollPerecentageTrigger || 80
      document.addEventListener(
        'scroll',
        debounce(
          debounceWindow,
          () => {
            const scrollPosition = getScrollPosition(window)
            if (scrollPosition >= scrollPerecentageTrigger) {
              this.props.openModal()
            }
          }))
    }
  })
)(HumbleFollowModal)

const HumbleFollowClick = compose(
  withModalState,
  lifecycle({
    componentDidMount() {
      document
        .getElementById(this.props.buttonId)
        .addEventListener('click', () => {
          this.props.openModal()
        })
    }
  })
)(HumbleFollowModal)

const HumbleFollowTimer = compose(
  withModalState,
  withCookieDisable,
  lifecycle({
    componentDidMount() {
      setTimeout(this.props.openModal, this.props.timedOpen)
    }
  })
)(HumbleFollowModal)

/*
  🚢 EXPORTS
*/

const HumbleFollow = compose(
  branchOnType('button', HumbleFollowClick),
  branchOnType('scroll', HumbleFollowScroll),
  branchOnType('timer', HumbleFollowTimer)
)(HumbleFollowModal)

export default HumbleFollow
export {HumbleFollowModal, HumbleFollowScroll, HumbleFollowClick, HumbleFollowTimer}
