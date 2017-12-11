import Constant from '../Constant'

export default {
  [Constant('SESSION_CHANGE')]: (state, payload) => {
    const storeState = state
    storeState.sessionLength = payload.length
  },
  [Constant('BREAK_CHANGE')]: (state, payload) => {
    const storeState = state
    storeState.breakLength = payload.length
  }
}
