import React from 'react'
import ReactDOM from 'react-dom'
import HumbleFollow from 'humble-follow-popup'
console.log('here')

function initHumbleFollow (props) {
  console.log('called')

  ReactDOM.render(<HumbleFollow {...props} />, document.getElementById('root'))
  return this
}

export default initHumbleFollow

// export default 'Hello, world!'
