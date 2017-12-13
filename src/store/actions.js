import Constant from '../Constant'

export default {
  [Constant('TIME_CHANGE')]: (store, payload) => {
    // payload = { setterName: String('Session length' or 'Break length'), displayNum: Number }
    switch (payload.setterName) {
      case 'Session length':
        store.commit(Constant('SESSION_CHANGE'), { length: payload.displayNum })
        break
      case 'Break length':
        store.commit(Constant('BREAK_CHANGE'), { length: payload.displayNum })
        break
      default:
    }
  }
}
