import React, { Component } from 'react'
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

import {HumbleFollowModal, HumbleFollowScroll, HumbleFollowClick} from 'humble-follow-popup';

const MESSAGE_TEXT = `
Hey, thanks so much for reading!

My goal to 2020 is to simply make other developers lives easier. This goal is directly affected by how many people know about what I'm doing.

So if you enjoyed the content so far I would be thrilled if you [followed me somewhere](https://www.producthunt.com/@bnchrch), anywhere.

Don't worry though! This is not a shakedown! You can close this pop up. No penalty. and I wont ask again.

Thanks again for reading and I'm always open to DM's so feel free to message me directly anytime.
`

const MediumIconSVG = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 10.6772 19.9312 11.3535 19.7959 12.0127C19.6641 12.6563 19.4687 13.2881 19.2129 13.8921C18.9629 14.4854 18.6528 15.0572 18.2905 15.5903C17.9335 16.1202 17.5224 16.6172 17.0707 17.0703C16.618 17.5215 16.12 17.9321 15.5911 18.291C15.0569 18.6514 14.4851 18.9614 13.8923 19.2129C13.2883 19.4678 12.6559 19.6631 12.0138 19.7949C11.3546 19.9307 10.6768 20 9.99955 20C9.32178 20 8.64402 19.9307 7.98578 19.7949C7.3427 19.6631 6.71034 19.4678 6.10678 19.2129C5.51399 18.9614 4.94167 18.6514 4.40747 18.291C3.87864 17.9321 3.38057 17.5215 2.92888 17.0703C2.47673 16.6172 2.06555 16.1202 1.70811 15.5903C1.34774 15.0572 1.03716 14.4854 0.786186 13.8921C0.530282 13.2881 0.334499 12.6563 0.202163 12.0127C0.0683794 11.3535 0 10.6772 0 10C0 9.32229 0.0683402 8.64456 0.202202 7.98679C0.334538 7.34323 0.530322 6.71044 0.786225 6.10742C1.0372 5.51369 1.34778 4.94144 1.70815 4.40821C2.06559 3.87796 2.47676 3.38183 2.92892 2.92821C3.38061 2.47702 3.87868 2.06739 4.40751 1.709C4.94171 1.34716 5.51403 1.03714 6.10682 0.785165C6.71037 0.529745 7.3427 0.333972 7.98582 0.203131C8.64406 0.0683756 9.32182 0 9.99959 0C10.6768 0 11.3546 0.0683756 12.0138 0.203131C12.6559 0.334011 13.2883 0.529784 13.8924 0.785165C14.4851 1.0371 15.057 1.34716 15.5912 1.709C16.12 2.06739 16.6181 2.47702 17.0707 2.92821C17.5224 3.38183 17.9336 3.87796 18.2905 4.40821C18.6528 4.94144 18.9629 5.51373 19.2129 6.10742C19.4687 6.71044 19.6641 7.34323 19.7959 7.98679C19.9312 8.64456 20 9.32229 20 10ZM6.35579 2.27589C3.97429 3.40042 2.19686 5.59474 1.64262 8.23928C1.86776 8.24124 5.42654 8.28617 9.52684 7.19678C8.04876 4.57079 6.46957 2.42778 6.35579 2.27589ZM10.2344 8.51177C5.83722 9.82813 1.61774 9.73341 1.46638 9.72758C1.46392 9.81936 1.45953 9.90821 1.45953 10C1.45953 12.1938 2.28721 14.1938 3.64763 15.7061C3.6447 15.7017 5.98177 11.5557 10.5904 10.0655C10.7017 10.0284 10.815 9.99514 10.9273 9.96292C10.713 9.4776 10.479 8.99126 10.2344 8.51177ZM15.6395 3.59083C14.136 2.26512 12.1618 1.46097 9.99955 1.46097C9.30565 1.46097 8.63227 1.54496 7.98723 1.70023C8.11514 1.87213 9.71926 4.00003 11.1798 6.68163C14.4021 5.47365 15.6185 3.62206 15.6395 3.59083ZM11.5094 11.3779C11.4903 11.3842 11.4713 11.3897 11.4527 11.3965C6.41398 13.153 4.76851 16.6928 4.7507 16.7315C6.20052 17.8589 8.01897 18.5391 9.99954 18.5391C11.1822 18.5391 12.3087 18.2983 13.3337 17.8623C13.2072 17.1162 12.7111 14.501 11.5094 11.3779ZM14.7718 17.082C16.6894 15.7881 18.0512 13.7334 18.4311 11.3535C18.2553 11.2968 15.8661 10.5405 13.1096 10.9824C14.2297 14.0606 14.6849 16.5674 14.7718 17.082ZM11.8371 7.95411C12.0353 8.36135 12.2272 8.77583 12.4045 9.19239C12.4675 9.34182 12.529 9.48832 12.589 9.63477C15.5228 9.26562 18.4131 9.88671 18.5366 9.91207C18.5171 7.88769 17.7929 6.02977 16.5947 4.57521C16.5785 4.59811 15.2088 6.57713 11.8371 7.95411Z" fill="white"/>
</svg>


const SOCIAL_ACCOUNTS = [
  {service: 'productHunt', url: 'https://www.producthunt.com/@bnchrch'},
  {service: 'twitter', url: 'https://twitter.com/bnchrch'},
  {service: 'indieHackers', url: 'https://www.indiehackers.com/bnchrch/'},
  {
    text: 'Follow me on Dribbble',
    color: '#F26798',
    fontColor: '#FFFFFF',
    url: 'https://medium.com/@bnchrch',
    icon: MediumIconSVG
  }
]

const BASE_MODAL_PROPS = {
  title: '👋 One humble request from an Indie Dev',
  closeText: 'Thanks, but no thanks',
  messageText: MESSAGE_TEXT,
  socialAccounts: SOCIAL_ACCOUNTS
}
const AppPure = ({modalIsOpen, closeModal, openModal, text}) => {
  return (
    <div style={{height: '6000px'}}>
      <button onClick={openModal}>Open Modal with custom state</button>
      <HumbleFollowModal
        {...BASE_MODAL_PROPS}
        closeModal={closeModal}
        openModal={openModal}
        modalIsOpen={modalIsOpen}
      />

      <button id='humbleButton'>Open Modal with managed state</button>

      <HumbleFollowClick
        {...BASE_MODAL_PROPS}
        buttonId='humbleButton'
      />

      <HumbleFollowScroll
        {...BASE_MODAL_PROPS}
        scrollPerecentageTrigger={80}
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
