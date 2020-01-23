

export const getDocHeight = () => Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)

export const getScrollPosition = (el) => {
  const scrollTop = el.pageYOffset
  const windowHeight = el.innerHeight
  const docHeight = getDocHeight()

  const totalDocScrollLength = docHeight - windowHeight
  const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
  return scrollPostion
}
