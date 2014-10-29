var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enqueuePosition = 0;

  this.dequeuePosition = 0;

  this.storage = {};

};

Queue.prototype.enqueue = function(value){

  this.storage[this.enqueuePosition] = value;

  this.enqueuePosition++;

  return value;

};

Queue.prototype.dequeue = function(){

  if( this.size() > 0 ){

    var results = this.storage[this.dequeuePosition];

    delete this.storage[this.dequeuePosition];

    this.dequeuePosition++;

    return results;

  }

};

Queue.prototype.size = function(){

  return this.enqueuePosition - this.dequeuePosition;

};