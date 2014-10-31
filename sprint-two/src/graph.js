var Graph = function(){
  this._nodes = {};
  this._nodeCount = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  //constant time
  if (this._nodeCount === 1) {
    for (var item in this._nodes) {
      if (this._nodes.hasOwnProperty(item)) {
        toNode = item;
      }
    }
  }
  this._nodes[newNode] = {};
  this._nodes[newNode].edges = {};
  this._nodes[newNode].edgeCount = 0;

  if (toNode) {
    this.addEdge(newNode, toNode);
  }
  this._nodeCount++;
};

Graph.prototype.contains = function(node){
  //linear time
  var result = false;
  for (var item in this._nodes){

    result = result || item === node;

  }
  return result;
};

Graph.prototype.removeNode = function(node){
  //constant with respect to nodes and linear with respect to edges
  if (this._nodes[node]){
    for (var item in this._nodes[node].edges){
      if (this._nodes.hasOwnProperty(item)) {
        this._nodes.removeEdge(node,item);
      }
    }
    delete this._nodes[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  //constant time
  var results = false;
  if (this._nodes[toNode].edges[fromNode]) {
    results = true;
  }

  return results;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //constant time
  if (this._nodes[fromNode] && this._nodes[toNode]) {

    this._nodes[fromNode].edges[toNode] = this._nodes[toNode];
    this._nodes[toNode].edges[fromNode] = this._nodes[fromNode];

    this._nodes[fromNode].edgeCount++;
    this._nodes[toNode].edgeCount++;
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //constant time
  if (this.getEdge(fromNode, toNode)) {
    delete this._nodes[fromNode].edges[toNode];
    delete this._nodes[toNode].edges[fromNode];
    
    this._nodes[fromNode].edgeCount--;
    this._nodes[toNode].edgeCount--;
  
    this._nodes[fromNode].edgeCount === 0 && delete this._nodes[fromNode];  
    this._nodes[toNode].edgeCount === 0 && delete this._nodes[toNode];  
  }


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
