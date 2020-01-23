import React from 'react'
import ReactDOM from 'react-dom'
import HumbleFollow from 'humble-follow-popup'

function initHumbleFollow (props) {
  const widgetElement = document.createElement('div')
  document.body.appendChild(widgetElement)
  ReactDOM.render(<HumbleFollow {...props} />, widgetElement)
}

(() => {
  window.HumbleFollow = initHumbleFollow
})()
