var makeBinarySearchTree = function(value){
  var bst = Object.create(binarySearchMethods);

  bst.value = value;
  bst.left = null;
  bst.right = null;
  
  return bst;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(value){

  var insert = value < this.value ? "left" : "right";

  if (this[insert] === null) {
    this[insert] = makeBinarySearchTree(value);
  } else {
    this[insert].insert(value);
  } 

};

binarySearchMethods.contains = function(target) {

  var insert = target < this.value ? "left" : "right";

  var results = false;

  if (this.value === target) {
    return results = true;
  } else if (this[insert] !== null) {
    results = this[insert].contains(target);
  }
  return results;
};

binarySearchMethods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
