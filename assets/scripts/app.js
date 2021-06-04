'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// add auth reqiure
const authEvents = require('./authentication/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // add auth click events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('click', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#sign-in-submit').on('click', authEvents.onShowSignIn)

  // add navbar click events
  // add main screen tab click events
})
