var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var results = Object.create(queueMethods);

  results.enqueuePosition = 0;

  results.dequeuePosition = 0;

  results.storage = {};

  return results;

};

var queueMethods = {};

queueMethods.enqueue = function(value){

  this.storage[this.enqueuePosition] = value;

  this.enqueuePosition++;

  return value;

};

queueMethods.dequeue = function(){

  if( this.size() > 0 ){

    var results = this.storage[this.dequeuePosition];

    delete this.storage[this.dequeuePosition];

    this.dequeuePosition++;

    return results;

  }

};

queueMethods.size = function(){

  return this.enqueuePosition - this.dequeuePosition;

};