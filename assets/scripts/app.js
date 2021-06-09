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

  // add navbar click events
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // add main screen tab click events
  $('#favorite-tab').on('click', mainEvents.onShowFavorites)
  $('#recipes-tab').on('click', (e) => {
    mainEvents.onGetUserRecipes(e)
    $('#create-recipes-tab').removeClass('active')
  })
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    // $(this).tab('show')
    // $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab
    $('#myTabs a:last').tab('show') // Select last tab
    $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
  })
  $('#create-recipes-tab').on('click', () => {
    $('input').val('')
    $('textarea').val('')
  })

  $('.create-a-recipe').on('submit', mainEvents.onSubmitRecipe)
  $('#recipes-list').on('click', mainEvents.onFindRecipe)
  $('#favorite-recipes-list').on('click', (e) => {
    mainEvents.onFindRecipe(e, true)
  })
  $('.delete-button').on('click', mainEvents.onDeleteRecipe)
  $('.update-button').on('click', mainEvents.onShowUpdate)
  $('#update-form').on('submit', mainEvents.onUpdateRecipe)
  $('#favorite-button').on('click', mainEvents.onFavoriteRecipe)
  $('#favorite-recipes-list').on('click', mainEvents.onFindRecipe)

  $('.search-button').on('click', mainEvents.onRecipeSearch)
  $('#filter-button').on('click', mainEvents.onFilterRecipes)
  $('#clear-filter-button').on('click', mainEvents.onClearFilters)

  $('.close').on('click', mainEvents.onCloseModal)
})
