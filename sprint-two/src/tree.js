var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree,treeMethods);
  return newTree;
};


var extend = function(to,from){

  for (var item in from){

    to[item] = from[item];

  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  //constant time
  var node = makeTree(value);

  this.children.push(node);

};

treeMethods.contains = function(target){
  //linear
  var result = false;

  var recursiveContains = function(currentNode){

    result = result || currentNode.value === target;

    if(currentNode.children.length > 0){

      for (var i = 0; i < currentNode.children.length; i++){

        recursiveContains( currentNode.children[i] );

      }

    }

  }

  recursiveContains(this);

  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
