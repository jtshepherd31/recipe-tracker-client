'use strict'
// require store for user data
const store = require('./../store')

// sign up success and failure
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')

  $('messaging'.text('Welcome New User! Please Sign In again using your new credentials.'))
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

const signUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#messaging').text('Invalid email or password, please try again.')
  $('messaging').css('color', 'red')
  setTimeout(function () {
    $('messaging').text('')
  }, 3000)
}

// sign in success and failure
const signInSuccess = function (res) {
  $('sign-in').trigger('reset')
  store.user = res.user
  $('#messaging').text('Signed in! Welcome!')
  // hide the sign in modal
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  // $('#myModal').hide()
}

const signInFailure = function () {
  $('sign-in').trigger('reset')
  $('#messaging'.text('Invalid username and password, please try again.'))
  $('#messaging').css('color', 'red')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

// change password success and failure
const changePasswordSuccess = function (res) {
  $('#change-password').trigger('reset')
  $('#change-password-messaging').text('Password Change Successful!')
  setTimeout(function () {
    $('#change-password-messaging').text('')
  }, 3000)
}

const changePasswordFailure = function () {
  $('#change-password-messaging').text('Passwords do not match, please try again.')
  $('#change-password-messaging').css('color', 'red')
  setTimeout(function () {
    $('#change-password-messaging').text('')
  }, 3000)
}
// sign out success and failure
const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Signed Out Successfully')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
}

const signOutFailure = function () {
  $('#messaging').text('Failed to sign out. Please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
