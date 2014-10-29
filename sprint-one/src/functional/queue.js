var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var dequeuePosition = 0;

  var enqueuePosition = 0;
  
  // Implement the methods below

  // declare a size at 0
  var size = function() {
    return (enqueuePosition - dequeuePosition);
  }

  someInstance.enqueue = function(value){
    //write value to storage at size
    storage[enqueuePosition] = value;
    
    //increment size
    enqueuePosition++;

    //return the value after storing it
    return value;
  };

  someInstance.dequeue = function(){
    //results variable for returning data to user
    var results;
    if (size() > 0) {
      results = storage[dequeuePosition];
      delete storage[dequeuePosition];
      dequeuePosition++;
    }
    
    //return data to user
    //decrease size
 
    return results;
  };

  someInstance.size = function(){
    //return size
    return size();
  };

  return someInstance;
};
