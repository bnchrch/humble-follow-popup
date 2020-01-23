import React from 'react'
import Markdown from 'markdown-to-jsx'
import styles from '../styles.css'

const Message = ({messageText}) =>
  <div className={styles.messageContainer}>
    <div className={styles.messageBody}><Markdown>{messageText}</Markdown></div>
  </div>

export default Message
