
import compose from 'recompose/compose'

import HumbleFollowModal from './containers/HumbleFollowModal'
import HumbleFollowScroll from './containers/HumbleFollowScroll'
import HumbleFollowClick from './containers/HumbleFollowClick'
import HumbleFollowTimer from './containers/HumbleFollowTimer'
import {branchOnType} from './hoc'

/*
  🚢 EXPORTS
*/

const HumbleFollow = compose(
  branchOnType('button', HumbleFollowClick),
  branchOnType('scroll', HumbleFollowScroll),
  branchOnType('timer', HumbleFollowTimer)
)(HumbleFollowModal)

export default HumbleFollow
export {HumbleFollowModal, HumbleFollowScroll, HumbleFollowClick, HumbleFollowTimer}
