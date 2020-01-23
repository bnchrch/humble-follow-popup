import React from 'react'

import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import filter from 'lodash/fp/filter'
import getOr from 'lodash/fp/getOr'

import styles from '../styles.css'
import {SOCIAL_MEDIA_BADGES} from '../constants'

const SocialMediaCTA = ({text, url, color, fontColor, IconComponent}) => {
  const style = {backgroundColor: color, color: fontColor}
  return (
    <a href={url} className={styles.socialMediaCTAContainer} style={style}>
      <div className={styles.socialIcon}><IconComponent /></div>
      <div className={styles.socialText}>{text}</div>
    </a>)
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
  const {service, url} = object
  return service
    ? {...getOr({}, service, SOCIAL_MEDIA_BADGES), url}
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

export default SocialMediaCTAs
