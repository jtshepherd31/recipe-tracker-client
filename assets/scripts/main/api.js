const config = require('./../config')
const store = require('./../store')

const submitRecipe = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const getUserRecipes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const findRecipe = function (recipeId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateRecipe = function (data, recipeId) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteRecipe = function (recipeId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  getUserRecipes,
  submitRecipe,
  findRecipe,
  updateRecipe,
  deleteRecipe
}
