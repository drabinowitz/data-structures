var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //declare results variable
  var results = {};

  //provide size variable
  results.length = 0;

  //provide a storage variable
  results.storage = {};

  extend(results, stackMethods);

  //returns results
  return results;
};

//provide extend function

var extend = function(to,from){

  for (var item in from){

    to[item] = from[item];

  }

}

var stackMethods = {};

//store methods for stack in stackMethods

stackMethods.push = function(value){
  //use this keyword
  this.storage[this.length] = value;
  this.length++;
  return value;
}

stackMethods.pop = function(){
  var results;

  if(this.length > 0){
  
    this.length--;
    
    results = this.storage[this.length];
  
    delete this.storage[this.length];
  
  }
  
  return results;
}

stackMethods.size = function(){

  return this.length;

}