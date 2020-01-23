import React from 'react'
import ReactDOM from 'react-dom'
import HumbleFollow from 'humble-follow-popup'

function initHumbleFollow (props) {
  ReactDOM.render(<HumbleFollow {...props} />, document.getElementById('root'))
}

(() => {
  window.HumbleFollow = initHumbleFollow
})()

