'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// add auth reqiure
const authEvents = require('./authentication/events')
const mainEvents = require('./main/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // add auth click events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-in-submit').on('click', authEvents.onShowSignIn)

  // add navbar click events
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // add main screen tab click events
  $('#recipes-tab').on('click', mainEvents.onGetUserRecipes)
  $('.create-a-recipe').on('submit', mainEvents.onSubmitRecipe)
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    // $(this).tab('show')
    // $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab
    $('#myTabs a:last').tab('show') // Select last tab
    $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
  })
  $('#recipes-list').on('click', mainEvents.onFindRecipe)
  $('.delete-button').on('click', mainEvents.onDeleteRecipe)
  // $('.update-button').on('click', mainEvents.onUpdateRecipe)
})
