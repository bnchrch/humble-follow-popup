import React from 'react'
import Modal from 'react-responsive-modal'
import styles from './styles.css'
import map from 'lodash/fp/map'
import Markdown from 'markdown-to-jsx'
// import CloseIconSVG from './assets/close.svg'
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

const CloseIconSVG = () => <svg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M2 28L26 2' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
  <path d='M5 2L29 28' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
</svg>

/*
TODO
- change all svgs to components
- ensure that the css is prefixed but not uniqified
- update styles
- add a bunch of sites
- create a scrollable open
- create a click open
- remove css modules
- find an auto css prefixer
- fix up this silly svg import
*/

const CloseIcon = ({close}) => <div onClick={close}><CloseIconSVG /></div>

const Header = ({title, closeModal}) => (
  <div className={styles.headerContainer}>
    <Title>{title}</Title>
    <CloseIcon close={closeModal} />
  </div>
)

const CLASSES = {
  modal: 'modalContent'
}

const HumbleFollowModal = ({
  modalIsOpen,
  closeModal,
  // afterOpenModal,
  // customStyles,
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
      closeIconSvgPath={<CloseIconSVG />}
    >
      <Header title={title} closeModal={closeModal} />
      <div className={styles.body}>
        <Message messageText={messageText} closeModal={closeModal} closeText={closeText} />
        <SocialMediaCTAs socialAccounts={socialAccounts} />
      </div>
    </Modal>)
}

export {HumbleFollowModal}
