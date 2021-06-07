'use strict'
// require store for user data
const store = require('./../store')

// sign up success and failure
const submitRecipeSuccess = function (res) {
  // $('#sign-up').trigger('reset')
  // $('messaging'.text('Recipe Successfully Created!'))
  // setTimeout(function () {
  //   $('#messaging').text('')
  // }, 3000)
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
    $('#recipes-list').prepend(`<li class="recipe-title"><button type="button" class="submit-button" id=${recipe._id} data-toggle="modal" data-target="#recipe-modal">
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
  $('.delete-button').attr('id', res.recipe._id)
}

const findRecipeFailure = function () {

}

const deleteRecipeSuccess = function (res) {

}

const deleteRecipeFailure = function () {

}
module.exports = {
  submitRecipeSuccess,
  submitRecipeFailure,
  getUserRecipesSuccess,
  getUserRecipesFailure,
  findRecipeSuccess,
  findRecipeFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure
}
