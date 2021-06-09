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
  $('#favorite-recipes-list span').remove()
  store.recipes = res.recipes
  const favoriteRecipes = res.recipes.filter(recipe => !!recipe.favorite)

  addRecipesToList(res.recipes, 'recipes-list')
  addRecipesToList(favoriteRecipes, 'favorite-recipes-list')

  $('#all-recipes-messaging').text('Here are your recipes!')
  $('#all-recipes-messaging').css('color', '#effce8')
  setTimeout(function () {
    $('#all-recipes-messaging').text('')
  }, 3000)
}

const addRecipesToList = function (recipes, target) {
  $(`#${target} span`).remove()

  const dataTarget = target === 'recipes-list' ? '#recipe-modal' : ''

  recipes.forEach(recipe => {
    let recipeImg

    if (recipe.type === 'breakfast') {
      recipeImg = './assets/images/breakfast-image.jpeg'
    } else if (recipe.type === 'lunch') {
      recipeImg = './assets/images/lunch-image.jpeg'
    } else if (recipe.type === 'dinner') {
      recipeImg = './assets/images/dinner-image.jpeg'
    } else if (recipe.type === 'appetizer') {
      recipeImg = './assets/images/app-image.jpeg'
    } else if (recipe.type === 'dessert') {
      recipeImg = './assets/images/dessert-image.jpeg'
    }

    $(`#${target}`).prepend(`<span class="recipe-title">
    <button type="button" class="open-recipe-button" id=${recipe._id} data-toggle="modal" data-target=${dataTarget}>
      <img class="recipe-img" src=${recipeImg}>
      <p>${recipe.name}</p>
    </button></span>`)
  })
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
  store.selectedRecipe = res.recipe
  $('#recipe-modal-title').text(`${res.recipe.name}`)
  $('#recipe-ingredients').text(`${res.recipe.ingredients}`)
  $('#recipe-instructions').text(`${res.recipe.instructions}`)
  $('#recipe-calories').text(`${res.recipe.calories}`)
  $('#recipe-type').text(`${res.recipe.type}`)
  $('#recipe-cuisine').text(`${res.recipe.cuisine}`)

  const favoriteClass = res.recipe.favorite ? 'favorite' : 'not-favorite'
  $('#favorite-button').attr('class', favoriteClass)

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

const findFavoriteRecipeSuccess = function (res) {
  $('.favorite-title').show()
  $('.favorite-default-message').hide()
  $('.favorite-recipe-info p').show()

  $('#favorite-recipe-name').text(`${res.recipe.name}`)
  $('#favorite-recipe-ingredients').text(`${res.recipe.ingredients}`)
  $('#favorite-recipe-instructions').text(`${res.recipe.instructions}`)
  $('#favorite-recipe-calories').text(`${res.recipe.calories}`)
  $('#favorite-recipe-type').text(`${res.recipe.type}`)
  $('#favorite-recipe-cuisine').text(`${res.recipe.cuisine}`)
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
  showUpdateFailure,
  addRecipesToList,
  findFavoriteRecipeSuccess
}
