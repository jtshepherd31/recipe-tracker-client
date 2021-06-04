'use strict'

// require form fields, api and ui files to store user info
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// add functions for sign up, sign in, sign out, and change password_confirmation

// sign up function
const onSignUp = function (event) {
  // prevent default
  event.preventDefault()
  // get user data from form fields
  const data = getFormFields(event.target)

  // api request with then and catch
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// sign in function
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onShowSignIn = function (event) {
  $('#sign-in-modal').modal('toggle')
}

const onShowChangePassword = function (event) {
  $('#myModal').modal('toggle')
}

// sign out function
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// change password function
const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
// module exports
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onShowSignIn,
  onShowChangePassword
}
