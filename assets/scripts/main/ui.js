'use strict'
// require store for user data
const store = require('./../store')

// sign up success and failure
const submitRecipeSuccess = function (res) {
  $('input').val('')
  $('textarea').val('')
}

const submitRecipeFailure = function () {
  // $('#submit-recipe').trigger('reset')
  // $('#messaging').text('Unable to Create a Recipe. Please Try Again.')
  // $('messaging').css('color', 'red')
  // setTimeout(function () {
  //   $('messaging').text('')
  // }, 3000)
}

const getUserRecipesSuccess = function (res) {
  $('#recipes-list li').remove()
  res.recipes.forEach(recipe => {
    $('#recipes-list').prepend(`<li class="recipe-title">
    <button type="button" class="open-recipe-button" id=${recipe._id} data-toggle="modal" data-target="#recipe-modal">
      ${recipe.name}
    </button></li>`)
  })
}

const getUserRecipesFailure = function () {
  // $('#submit-recipe').trigger('reset')
  // $('#messaging').text('Unable to Create a Recipe. Please Try Again.')
  // $('messaging').css('color', 'red')
  // setTimeout(function () {
  //   $('messaging').text('')
  // }, 3000)
}

const findRecipeSuccess = function (res) {
  $('#recipe-modal-title').text(`${res.recipe.name}`)
  $('#recipe-ingredients').text(`${res.recipe.ingredients}`)
  $('#recipe-instructions').text(`${res.recipe.instructions}`)
  $('#recipe-calories').text(`${res.recipe.calories}`)
  $('#recipe-type').text(`${res.recipe.type}`)
  $('#recipe-cuisine').text(`${res.recipe.cuisine}`)

  $('.recipe-name').val(`${res.recipe.name}`)
  $('.ingredients').val(`${res.recipe.ingredients}`)
  $('.instructions').val(`${res.recipe.instructions}`)
  $('.calories').val(`${res.recipe.calories}`)
  $('.type').val(`${res.recipe.type}`)
  $('.cuisine').val(`${res.recipe.cuisine}`)

  $('.delete-button').attr('id', res.recipe._id)
  $('#submit-update').attr('id', res.recipe._id)
}

const findRecipeFailure = function () {

}

const deleteRecipeSuccess = function (recipeId) {
  $('#recipe-modal').modal('toggle')
}

const deleteRecipeFailure = function () {

}

const updateRecipeSuccess = function (res) {
  $('#update-form').hide()
  $('.update-button').show()
  $('.delete-button').show()
  $('.recipe-info').show()
}

const updateRecipeFailure = function () {

}

const showUpdateSuccess = function (res) {
  // hide the sign in modal

}

const showUpdateFailure = function () {
  // $('sign-in').trigger('reset')
  // $('#messaging'.text('Invalid username and password, please try again.'))
  // $('#messaging').css('color', 'red')
  // setTimeout(function () {
  //   $('#messaging').text('')
  // }, 3000)
}
module.exports = {
  submitRecipeSuccess,
  submitRecipeFailure,
  getUserRecipesSuccess,
  getUserRecipesFailure,
  findRecipeSuccess,
  findRecipeFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  updateRecipeSuccess,
  updateRecipeFailure,
  showUpdateSuccess,
  showUpdateFailure
}
