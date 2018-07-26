import LoginValidator from '../validator/LoginValidator'
import LoginProxy from '../proxy/LoginProxy'

export default function (name, password, callback) {
  let result = LoginValidator.validateLoginParams(name, password)
  if ('pass' === result) {
    LoginProxy.requestLogin(name, password, callback)
  } else {
    if (callback) {
      callback(null, result)
    }
  }
}
