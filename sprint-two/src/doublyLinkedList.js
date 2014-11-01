var makedoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //constant time operation
    if (list.tail === null) {

      list.head = {};
      list.head.value = value;
      list.tail = list.head;
    } else {
      var parent = list.tail;
      list.tail.linkedListNode = {};
      list.tail = list.tail.linkedListNode;
      list.tail.previous = parent;
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
      delete list.head.previous;
    } else if (list.head !== null) {
      results = list.head.value;
      list.head = null;
      list.tail = null;
    }
    return results;
  };

  list.removeTail = function(){

    var results;

    if (list.tail.hasOwnProperty("previous")){

      results = list.tail.value;
      list.tail = list.tail.previous;
      delete list.tail.linkedListNode;

    } else {

      results = this.removeHead();

    }

    return results;

  };

  list.addToHead = function(value){

    if (list.head === null){

      this.addToTail(value);

    } else {

      var child = list.head;
      list.head.previous = {};
      list.head = list.head.previous;
      list.head.linkedListNode = child;
      list.head.value = value;

    }

  };

  list.contains = function(target){
    //linear time
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
