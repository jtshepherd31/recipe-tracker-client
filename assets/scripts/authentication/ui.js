'use strict'
// require store for user data
const store = require('./../store')

// sign up success and failure
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#sign-up-messaging').text('Welcome New User! Please Sign In again using your new credentials.')
  setTimeout(function () {
    $('#sign-up-messaging').text('')
  }, 3000)
}

const signUpFailure = function (res) {
  $('#sign-up').trigger('reset')
  $('#sign-up-messaging').text('Invalid email or password, please try again.')
  $('#sign-up-messaging').css('color', 'red')
  setTimeout(function () {
    $('#sign-up-messaging').text('')
  }, 3000)
}

// sign in success and failure
const signInSuccess = function (res) {
  store.user = res.user
  $('#success-sign-in-messaging').text('Signed in! Welcome!')
  // hide the sign in modal
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  // $('#myModal').hide()
  $('sign-in').trigger('reset')
  $('#sign-in-modal').modal('toggle')
  $('#create-recipes-tab').attr('class', 'active')
  setTimeout(function () {
    $('#success-sign-in-messaging').text('')
  }, 3000)
}

const signInFailure = function () {
  $('sign-in').trigger('reset')
  $('#failure-sign-in-messaging').text('Invalid username and password, please try again.')
  $('#failure-sign-in-messaging').css('color', 'red')
  setTimeout(function () {
    $('#failure-sign-in-messaging').text('')
  }, 3000)
}

// change password success and failure
const changePasswordSuccess = function (res) {
  $('#change-password').trigger('reset')
  $('#change-password-messaging').text('Password Change Successful!')
  $('#change-password-messaging').css('color', '#effce8')
  setTimeout(function () {
    $('#change-password-messaging').text('')
  }, 3000)
}

const changePasswordFailure = function () {
  $('#change-password-messaging').text('Incorrect Password.')
  $('#change-password-messaging').css('color', 'red')
  setTimeout(function () {
    $('#change-password-messaging').text('')
  }, 3000)
}
// sign out success and failure
const signOutSuccess = function () {
  store.user = null
  $('#sign-out-messaging').text('Signed Out Successfully')
  setTimeout(function () {
    $('#sign-out-messaging').text('')
  }, 3000)
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
}

const signOutFailure = function () {
  $('#sign-out-messaging').text('Failed to sign out. Please try again')
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
