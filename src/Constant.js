export default function (type) {
  let result
  switch (type) {
    case 'TIME_CHANGE':
      result = 'timeChange'
      break
    case 'SESSION_CHANGE':
      result = 'sessionChange'
      break
    case 'BREAK_CHANGE':
      result = 'breakChange'
      break
    default:
      result = 'no constant'
  }
  return result
}
