var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  //change linkedListNode to node

  list.addToTail = function(value){
    //constant time operation
    if (list.tail === null) {

      list.head = {};
      list.head.value = value;
      list.tail = list.head;
    } else {
      list.tail.linkedListNode = {};
      list.tail = list.tail.linkedListNode;
      list.tail.value = value;
    }
    return value;
  };

  list.removeHead = function(){
    //constant time
    var results;
    if (list.head.hasOwnProperty("linkedListNode")) {
      results = list.head.value;
      list.head = list.head.linkedListNode;
    } else if (list.head !== null) {
      results = list.head.value;
      list.head = null;
      list.tail = null;
    }
    return results;
  };

  list.contains = function(target){
    //linear time
    //change lLNode to anything better
    var results = false;
    var lLNode;   
    if(list.head !== null){
      results = list.head.value === target;
      lLNode = list.head;
      while(!results && lLNode.hasOwnProperty("linkedListNode")) {
        lLNode = lLNode.linkedListNode;
        results = lLNode.value === target;
      }
    }
    return results;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
