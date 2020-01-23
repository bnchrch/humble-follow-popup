# humble-follow-popup

> A popup to ask that users follow you

[![NPM](https://img.shields.io/npm/v/humble-follow-popup.svg)](https://www.npmjs.com/package/humble-follow-popup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save humble-follow-popup
```

## Usage

### With Managed State
```jsx
import React, { Component } from 'react'

import HumbleFollow from 'humble-follow-popup'

const MESSAGE_MARKDOWN = `
Hey, thanks so much for reading!

My goal to 2020 is to simply make other developers lives easier. This goal is directly affected by how many people know about what I'm doing.

So if you enjoyed the content so far I would be thrilled if you [followed me somewhere](https://www.producthunt.com/@bnchrch), anywhere.

Don't worry though! This is not a shakedown! You can close this pop up. No penalty. and I wont ask again.

Thanks again for reading and I'm always open to DM's so feel free to message me directly anytime.
`


const SOCIAL_ACCOUNTS = [
  {service: 'productHunt', url: 'https://www.producthunt.com/@bnchrch'},
  {service: 'twitter', url: 'https://twitter.com/bnchrch'},
  {service: 'indieHackers', url: 'https://www.indiehackers.com/bnchrch/'},
]

class Example extends Component {
  render () {
    return (
      <button id='humbleButton'>Open Modal with managed state</button>
      <HumbleFollow
        title='👋 One humble request from an Indie Dev',
        closeText='Thanks, but no thanks',
        messageText={MESSAGE_MARKDOWN},
        socialAccounts={SOCIAL_ACCOUNTS}
        type='button'
        buttonId='humbleButton'
      /> )
  }
}
```

### With Custom State
```jsx
<Button onClick={openModal}>Open Modal with custom state</Button>
<HumbleFollow
  {...BASE_MODAL_PROPS}
  closeModal={closeModal}
  openModal={openModal}
  modalIsOpen={modalIsOpen}
/>
```


### Open on Scrool Percentage
_Note: This will only appear once, to view again you must clear your cookies_
```jsx
<HumbleFollow
  {...BASE_MODAL_PROPS}
  type='scroll'
  scrollPerecentageTrigger={80}
  debounce={200}
/>
```

### Open on Timer
_Note: This will only appear once, to view again you must clear your cookies_
```jsx
<HumbleFollow
  {...BASE_MODAL_PROPS}
  type='timer'
  timedOpen={4000} // ms
/>
```

## License

GNU GPLv3 © [bechurch](https://github.com/bechurch)
