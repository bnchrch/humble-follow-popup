import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import HumbleFollowModal from './HumbleFollowModal'
import {withModalState, withCookieDisable} from '../hoc'

const HumbleFollowTimer = compose(
  withModalState,
  withCookieDisable,
  lifecycle({
    componentDidMount() {
      setTimeout(this.props.openModal, this.props.timedOpen)
    }
  })
)(HumbleFollowModal)

export default HumbleFollowTimer
