var recipes = {

};
function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return obj
}