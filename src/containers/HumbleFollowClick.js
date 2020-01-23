import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import HumbleFollowModal from './HumbleFollowModal'
import {withModalState} from '../hoc'

const HumbleFollowClick = compose(
  withModalState,
  lifecycle({
    componentDidMount() {
      document
        .getElementById(this.props.buttonId)
        .addEventListener('click', () => {
          this.props.openModal()
        })
    }
  })
)(HumbleFollowModal)

export default HumbleFollowClick
