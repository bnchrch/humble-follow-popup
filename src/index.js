import React from 'react'
import Modal from 'react-responsive-modal'
import styles from './styles.css'
import map from 'lodash/fp/map'
import flow from 'lodash/fp/flow'
import filter from 'lodash/fp/filter'
import getOr from 'lodash/fp/getOr'
import Markdown from 'markdown-to-jsx'
// import CloseIconSVG from './assets/close.svg'
const mapWithKey = map.convert({cap: false})

// SVGS

const CloseIconSVG = () => <svg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M2 28L26 2' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
  <path d='M5 2L29 28' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
</svg>

const ProductHuntIconSVG = () => <svg width='14' height='16' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path fillRule='evenodd' clipRule='evenodd' d='M9.78749 10V10.0002H4.04999V4.00017H9.78749V4C11.465 4 12.825 5.34317 12.825 7C12.825 8.65683 11.465 10 9.78749 10ZM9.7875 0V0.000166667L0 0V20H4.05V14.0002H9.7875V14C13.7018 14 16.875 10.866 16.875 7C16.875 3.134 13.7018 0 9.7875 0Z' fill='white' />
</svg>

const TwitterIconSVG = () => <svg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path fillRule='evenodd' clipRule='evenodd' d='M9.401 4.25625L9.44297 4.9483L8.74349 4.86356C6.19739 4.53872 3.97304 3.4371 2.08445 1.58693L1.16114 0.668915L0.923313 1.34684C0.419688 2.85804 0.741448 4.45398 1.79067 5.52735C2.35025 6.12054 2.22434 6.20528 1.25906 5.85219C0.923313 5.7392 0.629531 5.65446 0.601552 5.69683C0.503625 5.7957 0.839375 7.08092 1.10518 7.58937C1.46891 8.29553 2.21035 8.98758 3.02175 9.39716L3.70724 9.72199L2.89584 9.73612C2.11243 9.73612 2.08445 9.75024 2.16839 10.0468C2.44818 10.9649 3.55336 11.9394 4.78444 12.3631L5.65179 12.6597L4.89636 13.1116C3.77719 13.7613 2.46217 14.1285 1.14715 14.1567C0.517615 14.1709 0 14.2273 0 14.2697C0 14.411 1.70673 15.2019 2.69999 15.5126C5.67977 16.4306 9.21914 16.0351 11.8772 14.4674C13.7658 13.3517 15.6543 11.1343 16.5357 8.98758C17.0113 7.84359 17.487 5.75333 17.487 4.75057C17.487 4.10089 17.529 4.01615 18.3124 3.23937C18.774 2.78742 19.2077 2.2931 19.2916 2.15187C19.4315 1.88352 19.4175 1.88352 18.7041 2.12362C17.515 2.54732 17.3471 2.49083 17.9347 1.85528C18.3683 1.40333 18.8859 0.584174 18.8859 0.344077C18.8859 0.301707 18.6761 0.372324 18.4383 0.499434C18.1865 0.640668 17.6269 0.852518 17.2072 0.979629L16.4518 1.21973L15.7663 0.753655C15.3885 0.499434 14.8569 0.216967 14.5772 0.132227C13.8637 -0.0655006 12.7725 -0.0372539 12.129 0.18872C10.3803 0.824272 9.2751 2.46258 9.401 4.25625Z' fill='white' />
</svg>

const IndieHackerIconSVG = () => <svg width='20' height='16' viewBox='0 0 30 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M5.45454 0H0V23H5.45454V0Z' fill='#20364C' />
  <path d='M16.3636 0H10.9091V23H16.3636V0Z' fill='#20364C' />
  <path d='M25.4545 8.84616H15.4546V14.1539H25.4545V8.84616Z' fill='#20364C' />
  <path d='M30 0H24.5454V23H30V0Z' fill='#20364C' />
</svg>

// Rest

const SOCIAL_MEDIA_BADGES = {
  productHunt: {
    text: 'Follow me on Product Hunt',
    color: '#DA552F',
    fontColor: '#ffffff',
    icon: ProductHuntIconSVG
  },
  twitter: {
    text: 'Follow me on Twitter',
    color: '#55ACEE',
    fontColor: '#ffffff',
    icon: TwitterIconSVG
  },
  indieHackers: {
    text: 'Follow me on Indie Hackers',
    color: '#ffffff',
    fontColor: '#20364C',
    icon: IndieHackerIconSVG
  }
}

const Title = ({children}) => <div className={styles.titleContainer}>{children}</div>

const Message = ({messageText, closeModal, closeText}) => (
  <div className={styles.messageContainer}>
    <div className={styles.messageBody}><Markdown>{messageText}</Markdown></div>
    <button className={styles.messageButton} onClick={closeModal}>{closeText}</button>
  </div>
)

const SocialMediaCTA = ({text, url, color, fontColor, IconComponent}) => {
  const style = {backgroundColor: color, color: fontColor}
  return (
    <div className={styles.socialMediaCTAContainer} style={style}>
      <div className={styles.socialIcon}><IconComponent /></div>
      <a className={styles.socialText} href={url}>{text}</a>
    </div>)
}

const renderSocialMediaCTA = ({text, color, fontColor, icon, url}) => (text &&
  <SocialMediaCTA
    key={url}
    text={text}
    url={url}
    color={color}
    fontColor={fontColor}
    IconComponent={icon}
  />)

const handleSocialServicePresets = (object) => {
  const {service} = object
  return service
    ? SOCIAL_MEDIA_BADGES[service]
    : object
}

const SocialMediaCTAs = ({socialAccounts}) => (
  <div className={styles.socialCTAColumn}>
    {
      flow(
        map(handleSocialServicePresets),
        filter(Boolean),
        map(renderSocialMediaCTA)
      )(socialAccounts)
    }
  </div>)

/*
TODO
- change all svgs to icons
- ensure that the css is prefixed but not uniqified
- update styles
- add a bunch of sites
- create a scrollable open
- create a click open
- remove css modules
- find an auto css prefixer
- fix up this silly svg import
- add darkmode
- add ability to define your own
*/

const Header = ({title}) => (
  <div className={styles.headerContainer}>
    <Title>{title}</Title>
  </div>
)

const CLASSES = {
  modal: 'modalContent'
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
      closeIconSvgPath={<CloseIconSVG />}
    >
      <Header title={title} />
      <div className={styles.body}>
        <Message messageText={messageText} closeModal={closeModal} closeText={closeText} />
        <SocialMediaCTAs socialAccounts={socialAccounts} />
      </div>
    </Modal>)
}

export {HumbleFollowModal}
