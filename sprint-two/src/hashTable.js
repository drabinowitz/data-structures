var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

function arrayAtIndexLookup(arrayAtIndex,k){

  var keyInArray = false;

  if (Array.isArray(arrayAtIndex)) {
    keyInArray = -1;
    for (var j = 0; j < arrayAtIndex.length; j++) {
      if (arrayAtIndex[j][0] === k) {
        keyInArray = j;
      }
    }
  }

  return keyInArray;

}

HashTable.prototype._rehash = function(newLimit){

  this._limit = newLimit || this._limit;

  var tempDataArray = [];

  this._storage.each(function(arrayAtIndex){

    if (Array.isArray(arrayAtIndex)){

      for (var i = 0; i < arrayAtIndex.length; i++){

        tempDataArray.push(arrayAtIndex[i]);

      }

    }

  });

  this._storage = makeLimitedArray(this._limit);

  this._size = 0;

  for (var j = 0; j < tempDataArray.length; j++){

    this.insert.apply(this,tempDataArray[j]);

  }

}

HashTable.prototype.insert = function(k, v){
  //constant time with a perfact hash; worst case linear
  var i = getIndexBelowMaxForKey(k, this._limit);

  var arrayAtIndex = this._storage.get(i);

  var keyInArray = arrayAtIndexLookup(arrayAtIndex,k);

  if (keyInArray === false){

    arrayAtIndex = [];
    arrayAtIndex.push([k, v]);

  } else if (keyInArray === -1){

    arrayAtIndex.push([k, v]);
    
  } else {

    arrayAtIndex[keyInArray][1] = v;
    
  }
 
  this._storage.set(i, arrayAtIndex);

  this._size++;

  if (this._size >= this._limit - 1){

    this._rehash(this._limit * 2);

  }

};

HashTable.prototype.retrieve = function(k){
  //constant time with a perfact hash; worst case linear
  var i = getIndexBelowMaxForKey(k, this._limit);

  var result = null;

  var arrayAtIndex = this._storage.get(i);

  var keyInArray = arrayAtIndexLookup(arrayAtIndex,k);

  if (keyInArray !== false && keyInArray >= 0){

    result = arrayAtIndex[keyInArray][1];

  }

  return result;

};

HashTable.prototype.remove = function(k){
  //constant time with a perfact hash; worst case linear 

  if (this.retrieve(k) !== null){
    var i = getIndexBelowMaxForKey(k, this._limit);

    var arrayAtIndex = this._storage.get(i);
    var keyInArray = arrayAtIndexLookup(arrayAtIndex,k);

    arrayAtIndex.splice(keyInArray, 1);

    this._size--;

    if (this._size <= this._limit / 4 - 1){

      this._rehash(this._limit / 2);

    }

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
