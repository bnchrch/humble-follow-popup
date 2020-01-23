import React from 'react'
import styles from '../styles.css'

const Title = ({children}) => <div className={styles.titleContainer}>{children}</div>

const Header = ({title}) => (
  <div className={styles.headerContainer}>
    <Title>{title}</Title>
  </div>
)

export default Header
