'use strict'

// require form fields, api and ui files to store user info
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// add functions for sign up, sign in, sign out, and change password_confirmation

// sign up function
const onSubmitRecipe = function (event) {
  // prevent default
  event.preventDefault()
  // get user data from form fields
  const data = getFormFields(event.target)
  data.recipe.owner = store.user._id

  // api request with then and catch
  api.submitRecipe(data)
    .then(ui.submitRecipeSuccess)
    .catch(ui.submitRecipeFailure)
}

const onGetUserRecipes = function (event) {
  // prevent default
  event.preventDefault()
  // get user data from form fields

  // api request with then and catch
  api.getUserRecipes()
    .then(ui.getUserRecipesSuccess)
    .catch(ui.getUserRecipesFailure)
}

const onFindRecipe = function (event) {
  // prevent default
  event.preventDefault()
  $('#update-form').hide()
  $('.update-button').show()
  $('.delete-button').show()
  $('.recipe-info').show()
  // api request with then and catch
  api.findRecipe(event.target.id)
    .then(ui.findRecipeSuccess)
    .catch(ui.findRecipeFailure)
}

const onDeleteRecipe = function (event) {
  // prevent default
  event.preventDefault()
  // api request with then and catch
  api.deleteRecipe(event.target.id)
    .then(ui.deleteRecipeSuccess)
    .then((e) => {
      api.getUserRecipes()
        .then(ui.getUserRecipesSuccess)
        .catch(ui.getUserRecipesFailure)
    })
    .catch(ui.deleteRecipeFailure)
}

const onUpdateRecipe = function (event) {
  // prevent default
  event.preventDefault()
  const data = getFormFields(event.target)
  const recipeId = $('#update-form .cr-inputs button').attr('id')
  // api request with then and catch
  api.updateRecipe(data, recipeId)
    .then(() => {
      api.findRecipe(recipeId)
        .then(ui.findRecipeSuccess)
        .catch(ui.findRecipeFailure)
    })
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

const onShowUpdate = function () {
  $('#update-form').show()
  $('.update-button').hide()
  $('.delete-button').hide()
  $('.recipe-info').hide()
}
// module exports
module.exports = {
  onSubmitRecipe,
  onGetUserRecipes,
  onFindRecipe,
  onDeleteRecipe,
  onUpdateRecipe,
  onShowUpdate
}
