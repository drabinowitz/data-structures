var makeStack = function(){
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};

  // create a variable called size with value 0
  var size = 0;
  
  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    // when pushing an item, increment the size
    size++;
    return value;
  };

  someInstance.pop = function(){
    var result;
    // when popping in item, decrement the size
    // Only decrement size if size > 0
    if (size > 0) {
      size--;
      result = storage[size];
      delete storage[size]; 
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};