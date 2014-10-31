var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
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

HashTable.prototype.insert = function(k, v){
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

};

HashTable.prototype.retrieve = function(k){
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
  
  if (this.retrieve(k) !== null){

    this.insert(k,null);

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
