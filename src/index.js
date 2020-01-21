import React from 'react'
import Modal from 'react-modal'
import styles from './styles.css'
import map from 'lodash/fp/map'
import Markdown from 'markdown-to-jsx'
const mapWithKey = map.convert({cap: false})

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
  // alert(JSON.stringify(socialAccounts))
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

const HumbleFollowModal = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  customStyles,
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
      style={customStyles}
      contentLabel={title}
    >

      <Title>{title}</Title>
      <div className={styles.body}>
        <Message messageText={messageText} closeModal={closeModal} closeText={closeText}/>
        <SocialMediaCTAs socialAccounts={socialAccounts} />
      </div>
      <button onClick={closeModal}>Close</button>
    </Modal>)
}

export {HumbleFollowModal}
