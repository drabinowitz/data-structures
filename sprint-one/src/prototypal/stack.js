var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create object extended with stack methods
  var results = Object.create(stackMethods);

  results.length = 0;

  results.storage = {};

  return results;
};

var stackMethods = {};

stackMethods.push = function(value){

  this.storage[this.length] = value;

  this.length++;

  return value;

};

stackMethods.pop = function(){

  if(this.length > 0){

    this.length--;

    var results = this.storage[this.length];

    delete this.storage[this.length];

    return results;

  }

};

stackMethods.size = function(){

  return  this.length;

}
