'use strict'
const store = require('./../store')

const submitRecipeSuccess = function (res) {
  $('input').val('')
  $('textarea').val('')
  $('#submit-recipe').trigger('reset')
  $('#create-message').text('Recipe created and stored!')
  $('#create-message').css('color', '#effce8')
  setTimeout(function () {
    $('#create-message').text('')
  }, 3000)
}

const submitRecipeFailure = function () {
  $('#submit-recipe').trigger('reset')
  $('#create-message').text('Unable to Create a Recipe. Please Try Again.')
  $('#create-message').css('color', 'red')
  setTimeout(function () {
    $('#create-message').text('')
  }, 3000)
}

const getUserRecipesSuccess = function (res) {
  $('#recipes-list li').remove()
  res.recipes.forEach(recipe => {
    $('#recipes-list').prepend(`<li class="recipe-title">
    <button type="button" class="open-recipe-button" id=${recipe._id} data-toggle="modal" data-target="#recipe-modal">
      ${recipe.name}
    </button></li>`)
  })
  $('#all-recipes-messaging').text('Here are your recipes!')
  $('#all-recipes-messaging').css('color', '#effce8')
  setTimeout(function () {
    $('#all-recipes-messaging').text('')
  }, 3000)
}

const getUserRecipesFailure = function () {
  $('#submit-recipe').trigger('reset')
  $('#all-recipes-messaging').text('Unable to find Recipes. Please Try Again.')
  $('#all-recipes-messaging').css('color', 'red')
  setTimeout(function () {
    $('#all-recipes-messaging').text('')
  }, 3000)
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
  setTimeout(function () {
    $('.find-recipe-messaging').text('')
  }, 3000)
}

const findRecipeFailure = function () {
  $('#find-recipe-messaging').text('Unable to find Recipe, Please try again.')
  $('#find-recipe-messaging').css('color', 'red')
  setTimeout(function () {
    $('#find-recipe-messaging').text('')
  }, 3000)
}

const deleteRecipeSuccess = function (recipeId) {
  $('#recipe-modal').modal('toggle')
  $('#delete-messaging').text('Recipe deleted.')
  $('#delete-messaging').css('color', '#effce8')
  setTimeout(function () {
    $('#delete-recipe-messaging').text('')
  }, 3000)
}

const deleteRecipeFailure = function () {
  $('#delete-recipe-messaging').text('Invalid email or password, please try again.')
  $('#delete-recipe-messaging').css('color', 'red')
  setTimeout(function () {
    $('#delete-recipe-messaging').text('')
  }, 3000)
}

const updateRecipeSuccess = function (res) {
  $('#update-form').hide()
  $('.update-button').show()
  $('.delete-button').show()
  $('.recipe-info').show()
  $('#update-messaging').text('Recipe updated!')
  $('#update-messaging').css('color', '#effce8')
  setTimeout(function () {
    $('#update-messaging').text('')
  }, 3000)
}

const updateRecipeFailure = function () {
  $('#update-messaging').text('Unable to update recipe, please try again.')
  $('#update-messaging').css('color', 'red')
  setTimeout(function () {
    $('#update-messaging').text('')
  }, 3000)
}

const showUpdateSuccess = function (res) {

}

const showUpdateFailure = function () {

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
