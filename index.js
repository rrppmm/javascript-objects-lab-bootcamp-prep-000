var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}
function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes[key];
  return newRecipes;
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}