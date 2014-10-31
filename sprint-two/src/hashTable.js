var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  while (this._storage.get(i) !== undefined) {
    i++;
  }

  this._storage.set(i, v);

  return v;

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  
  this.insert(k, undefined);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
