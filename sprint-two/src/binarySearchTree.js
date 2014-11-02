var makeBinarySearchTree = function(value){
  var bst = Object.create(binarySearchMethods);

  bst.value = value;
  bst.left = null;
  bst.right = null;
  
  return bst;
};

var binarySearchMethods = {};

binarySearchMethods._rebalance = function(){

  var rebalancedValues = [];
  // var average = 0;

  this.breadthFirstLog(function(value){

    rebalancedValues.push(value);
    // average += value;

  });

  // average = average / rebalancedValues.length;

  //resetting array:
  // set this.value equal to first in value in array

  rebalancedValues.sort(function(a,b){
    return a - b;
  });

  // set this.left and this.right null
  this.left = null;

  this.right = null;

  this.value = rebalancedValues.splice(Math.floor(rebalancedValues.length/2),1)[0];

  var recursivelyRebalance = function(){

    var nextSet = [];

    for (var i = 0; i < arguments.length; i++){

      if (arguments[i].length > 0){

        this.insert(arguments[i].splice(Math.floor(arguments[i].length/2),1)[0]);

        if (arguments[i].length > 0){

          var rightArray = arguments[i].splice(Math.floor(arguments[i].length/2));

          arguments[i].length && nextSet.push(arguments[i]);

          rightArray.length && nextSet.push(rightArray);

        }

      }

    }

    if (nextSet.length > 0){

      recursivelyRebalance.apply(this,nextSet);

    } 

  }

  var rightRebalance = rebalancedValues.splice(Math.floor(rebalancedValues.length/2));

  recursivelyRebalance.apply(this,[rebalancedValues,rightRebalance]);

  // insert remainder of values

  if (rebalancedValues.length < 3){

    for(var i = 1; i < rebalancedValues.length; i++){

      this.insert(rebalancedValues[i]);

    }

  } else {



  }

};

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

binarySearchMethods.breadthFirstLog = function(callback) {

  var recursivelyBreadthFirst = function(arrayOfNodes) {
   var nextArray = [];
   for (var i = 0; i < arrayOfNodes.length; i++) {
    callback(arrayOfNodes[i].value);
    if (arrayOfNodes[i].left) {
      nextArray.push(arrayOfNodes[i].left);
    }
    if (arrayOfNodes[i].right) {
      nextArray.push(arrayOfNodes[i].right);
    } 
   }
   if (nextArray.length > 0) {
    recursivelyBreadthFirst(nextArray);
   }
  };

  recursivelyBreadthFirst([this]);

  //callback on this left

  //callback on this right

  //callback on this left left

  //callback on this left right

  //callback on this right left

  //callback on this right right

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
