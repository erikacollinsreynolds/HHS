/**
 * Create a function that returns the 
 * height of a Binary Search Tree.
 */

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

// Add a new node to a BST
BinarySearchTree.prototype.add = function(value) {
  if (value > this.value) {
    this.right ? this.right.add(value) : this.right = new BinarySearchTree(value);
  } else if (value < this.value) {
    this.left ? this.left.add(value) : this.left = new BinarySearchTree(value);
  } 
};

const tree = new BinarySearchTree(10);
tree.add(5);
tree.add(12);
tree.add(2);
tree.add(3);
tree.add(7);


const bstHeight = (root) => {
  if (!root) return -1;
  return 1 + Math.max(bstHeight(root.left), bstHeight(root.right)); 
}

console.log(bstHeight(tree))
