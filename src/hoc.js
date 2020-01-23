import withState from 'recompose/withState'
import withProps from 'recompose/withProps'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'
import compose from 'recompose/compose'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

/*
  🛠 UTIL
*/

export const branchOnType = (typeToFind, component) => branch(({type}) => type === typeToFind, renderComponent(component))

/*
  🎊 HOCs
*/

export const withModalState = compose(
  withState('modalIsOpen', 'setModalOpen', false),
  withProps(({setModalOpen}) => ({
    closeModal: () => setModalOpen(false),
    openModal: () => setModalOpen(true)
  }))
)

export const withCookieDisable = withProps(({openModal}) => ({
  openModal: () => {
    const cookieId = 'HasSeenHumbleModal'
    const hasSeenHumbleModal = cookies.get(cookieId)

    if (!hasSeenHumbleModal) {
      cookies.set(cookieId, true, { path: '/' })
      openModal()
    }
  }
}))
