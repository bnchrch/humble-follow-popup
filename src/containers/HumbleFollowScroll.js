import debounce from 'lodash/fp/debounce'

import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import HumbleFollowModal from './HumbleFollowModal'
import {withModalState, withCookieDisable} from '../hoc'
import {getScrollPosition} from '../util'

const HumbleFollowScroll = compose(
  withModalState,
  withCookieDisable,
  lifecycle({
    componentDidMount() {
      const debounceWindow = this.props.debouce || 500
      const scrollPerecentageTrigger = this.props.scrollPerecentageTrigger || 80
      document.addEventListener(
        'scroll',
        debounce(
          debounceWindow,
          () => {
            const scrollPosition = getScrollPosition(window)
            if (scrollPosition >= scrollPerecentageTrigger) {
              this.props.openModal()
            }
          }))
    }
  })
)(HumbleFollowModal)

export default HumbleFollowScroll
