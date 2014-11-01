var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
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

  node.parent = this;

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

treeMethods.removeFromParent = function(){

  if(this.parent !== null){

    var parent = this.parent;

    this.parent = null;

    for (var i = 0; i < parent.children.length; i++){

      if (parent.children[i] === this){

        parent.children.splice(i,1);

      }

    }

  }

};

treeMethods.traverse = function (callback) {

  for(var topNode = this; topNode.parent !== null; topNode = topNode.parent){}

  var recursiveTraverse = function(currentNode) {
    callback(currentNode.value);
    if (currentNode.children.length > 0) {
      for (var i = 0; i < currentNode.children.length; i++) {
        recursiveTraverse(currentNode.children[i]);
      }
    }
  }  

  recursiveTraverse(topNode);
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
