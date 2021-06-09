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
  data.recipe.favorite = false

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

const onFindRecipe = function (event, favoriteTabActive) {
  // prevent default
  event.preventDefault()
  // api request with then and catch
  api.findRecipe(event.target.parentNode.id)
    .then(favoriteTabActive ? ui.findFavoriteRecipeSuccess : ui.findRecipeSuccess)
    .catch(ui.findRecipeFailure)
}

const onCloseModal = function () {
  $('#update-form').hide()
  $('.update-button').show()
  $('.delete-button').show()
  $('.recipe-info').show()
}

const onDeleteRecipe = function (event) {
  // prevent default
  event.preventDefault()
  console.log(event.target)
  // api request with then and catch
  api.deleteRecipe(store.selectedRecipe._id)
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
  const recipeId = store.selectedRecipe._id
  const isFavorite = $('#favorite-button').hasClass('favorite')

  data.recipe.favorite = isFavorite
  // api request with then and catch
  api.updateRecipe(data, recipeId)
    .then(() => {
      api.findRecipe(recipeId)
        .then(ui.findRecipeSuccess)
        .catch(ui.findRecipeFailure)
    })
    .then(ui.updateRecipeSuccess)
    .then((e) => {
      api.getUserRecipes()
        .then(ui.getUserRecipesSuccess)
        .catch(ui.getUserRecipesFailure)
    })
    .catch(ui.updateRecipeFailure)
}

const onShowUpdate = function () {
  $('#update-form').show()
  $('.update-button').hide()
  $('.delete-button').hide()
  $('.recipe-info').hide()

  $('.update-input-section').css('display', 'flex')
}

const onRecipeSearch = function () {
  $('#filter-meal-type').val('none')
  $('#filter-cuisine').val('none')

  const searchValue = $('#search-bar').val()

  const filteredRecipes = store.recipes.filter(recipe => {
    const lowerCaseName = recipe.name.toLowerCase()
    return lowerCaseName.includes(searchValue.toLowerCase())
  })

  $('#recipes-list span').remove()
  ui.addRecipesToList(filteredRecipes, 'recipes-list')
}

const onFilterRecipes = function () {
  $('#search-bar').val('')

  const mealTypeFilter = $('#filter-meal-type').val()
  const cuisineFilter = $('#filter-cuisine').val()

  const filteredRecipes = store.recipes.filter(recipe => {
    return recipe.type === mealTypeFilter || recipe.cuisine === cuisineFilter
  })

  ui.addRecipesToList(filteredRecipes, 'recipes-list')
}

const onClearFilters = function () {
  $('#filter-meal-type').val('none')
  $('#filter-cuisine').val('none')

  ui.addRecipesToList(store.recipes, 'recipes-list')
}

const onFavoriteRecipe = function () {
  $('#favorite-button').toggleClass('not-favorite')
  $('#favorite-button').toggleClass('favorite')

  if ($('#update-form').is(':hidden')) {
    const isFavorite = $('#favorite-button').hasClass('favorite')
    const data = { recipe: store.selectedRecipe }
    data.recipe.favorite = isFavorite
    delete data.recipe.owner

    api.updateRecipe(data, data.recipe._id)
      .then(ui.updateRecipeSuccess)
      .catch(ui.updateRecipeFailure)
  }
}

const onShowFavorites = function (e) {
  $('.favorite-title').hide()
  $('.favorite-default-message').show()
  $('.favorite-recipe-info p').hide()

  $('#create-recipes-tab').removeClass('active')
  if (!store.recipes) {
    onGetUserRecipes(e)
  }
}
// module exports
module.exports = {
  onSubmitRecipe,
  onGetUserRecipes,
  onFindRecipe,
  onDeleteRecipe,
  onUpdateRecipe,
  onShowUpdate,
  onRecipeSearch,
  onFavoriteRecipe,
  onShowFavorites,
  onFilterRecipes,
  onClearFilters,
  onCloseModal
}
