import React from 'react'
import Modal from 'react-modal'
import styles from './styles.css'
import map from 'lodash/fp/map'
import Markdown from 'markdown-to-jsx'
const mapWithKey = map.convert({cap: false})

const MODAL_STYLES = {
  content: {
    background: '#0F2439',
    color: '#FFFFFF',
    padding: '2.5rem'
  }
}

const Title = ({children}) => <div className={styles.titleContainer}>{children}</div>

const Message = ({messageText, closeModal, closeText}) => (
  <div className={styles.messageContainer}>
    <div className={styles.messageBody}><Markdown>{messageText}</Markdown></div>
    <button className={styles.messageButton} onClick={closeModal}>{closeText}</button>
  </div>
)

const SocialMediaCTA = ({service, url}) => {
  console.log({service, url})
  return (<div className={styles.socialMediaCTAContainer}><a href={url}>{service}</a></div>)
}

const SocialMediaCTAs = ({socialAccounts}) => {
  return (
    <div className={styles.socialCTAColumn}>
      {
        mapWithKey(
          (value, key) => <SocialMediaCTA key={key} service={key} url={value} />,
          socialAccounts
        )
      }
    </div>
  )
}

/*
TODO
- ensure that the css is prefixed but not uniqified
- update styles
- add a bunch of sites
- create a scrollable open
- create a click open
*/

const CloseIcon = ({close}) => <div onClick={close}>x</div>

const Header = ({title, closeModal}) => (
  <div className={styles.headerContainer}>
    <Title>{title}</Title>
    <CloseIcon close={closeModal} />
  </div>
)

const HumbleFollowModal = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  // customStyles,
  title,
  messageText,
  socialAccounts,
  closeText
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={MODAL_STYLES}
      contentLabel={title}
    >
      <div className={styles.modalContent}>
        <Header title={title} closeModal={closeModal} />
        <div className={styles.body}>
          <Message messageText={messageText} closeModal={closeModal} closeText={closeText}/>
          <SocialMediaCTAs socialAccounts={socialAccounts} />
        </div>
      </div>

    </Modal>)
}

export {HumbleFollowModal}
