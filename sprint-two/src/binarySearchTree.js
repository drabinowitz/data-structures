var makeBinarySearchTree = function(value){
  var bst = Object.create(binarySearchMethods);

  bst.value = value;
  bst.left = null;
  bst.right = null;
  
  return bst;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(value){
  //average is O(log(n)) but worst case is O(n)
  var insert = value < this.value ? "left" : "right";

  if (this[insert] === null) {
    this[insert] = makeBinarySearchTree(value);
  } else {
    this[insert].insert(value);
  } 

};

binarySearchMethods.contains = function(target) {
  //average is O(log(n)) but worst case is O(n)
  var results = false;

  if (this.value === target) {
    return results = true;
  } else {

    if (this.left){

      results = results || this.left.contains(target);

    }

    if (this.right){

      results = results || this.right.contains(target);

    }

  }

  return results;
};

binarySearchMethods.depthFirstLog = function(callback) {
  //linear
  callback(this.value);

  if (this.left){

    this.left.depthFirstLog(callback);

  }

  if (this.right){

    this.right.depthFirstLog(callback);

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
