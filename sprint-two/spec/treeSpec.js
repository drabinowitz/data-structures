describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "traverse", "removeFromParent", "addChild" and "contains", a property named "value", and a property named "parent"', function() {
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.traverse).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should add children to the tree and they should be aware of their parents', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should allow children to disassociate themselves from their parents', function() {
    tree.addChild(5);
    expect(tree.children.length).to.equal(1);
    var child = tree.children[0];
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(child.value).to.equal(5);
    expect(tree.children.length).to.equal(0);
    expect(tree.contains(5)).to.equal(false);
  });

  it('should accept a callback and execute it on every node', function(){
    
    var results = [];

    var callback = function(value) {
      results.push(value);
    };

    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);

    tree.children[0].traverse(callback);
    results.sort();

    expect(results).to.eql([5, 6, 7, 8, undefined]);

  });

});
