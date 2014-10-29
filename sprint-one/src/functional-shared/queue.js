var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  //declare results variable
  var results = {};

  //provide size variable
  results.enqueuePosition = 0;
  results.dequeuePosition = 0;

  //provide a storage variable
  results.storage = {};

  extend(results, queueMethods);

  //returns results
  return results;
};

//provide extend function

var extend = function(to,from){

  for (var item in from){

    to[item] = from[item];

  }
};



  var queueMethods = {};

  // Implement the methods below

  queueMethods.enqueue = function(value){
    //write value to storage at size
    this.storage[this.enqueuePosition] = value;
    
    //increment size
    this.enqueuePosition++;

    //return the value after storing it
    return value;
  };

  queueMethods.dequeue = function(){
    //results variable for returning data to user
    var results;
    if (this.size() > 0) {
      results = this.storage[this.dequeuePosition];
      delete this.storage[this.dequeuePosition];
      this.dequeuePosition++;
    }
    //return data to user
    //decrease size
    return results;
  };

  queueMethods.size = function(){
    //return size
    return (this.enqueuePosition - this.dequeuePosition);
  };