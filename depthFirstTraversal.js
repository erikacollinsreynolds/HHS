function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*
Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.
*/

const tree = new BinarySearchTree(10);
tree.left = new BinarySearchTree(5);
tree.right = new BinarySearchTree(20);
tree.right.right = new BinarySearchTree(25);
tree.right.left = new BinarySearchTree(15);
tree.left.left = new BinarySearchTree(0);

// If you are curious to see a visual of the tree once I've assigned all the nodes
// console.log(tree)

// // PRE-ORDER
const bstSumPreOrder = root => {
  // // a place to visualize the values (OPTIONAL)
  let values = [];

  // declare a variable to store sum
  let sum = 0;

  // create helper function to traverse in pre-order
  function traversePreOrder(root) {

    // edge case if root is null
    if (!root) return sum;

    // // push root node to values (OPTIONAL)
    values.push(root.value);

    // add current node value to sum
    sum += root.value;

    // if left node exists, traverse recursively 
    if (root.left) traversePreOrder(root.left);
    
    // if right node exists, traverse recursively 
    if (root.right) traversePreOrder(root.right);
  }

  // invoke helper function
  traversePreOrder(root);

  console.log(`The sum is: ${sum} and here are the nodes we visited in pre-order: ${values}`)

  // return sum
  return sum;
};

console.log(bstSumPreOrder(tree))


// // // IN ORDER
// const bstSumInOrder = root => {
//   // // a place to visualize the values (OPTIONAL)
//   let values = [];

//   // declare a variable to store sum
//   let sum = 0;

//   // create helper function to traverse in in-order
//   function traverseInOrder(root) {

//     // edge case if root is null
//     if (!root) return sum;

//     // if left node exists, traverse recursively 
//     if (root.left) traverseInOrder(root.left);

//     // // push root node to values (OPTIONAL)
//     values.push(root.value);

//     // add current node value to sum
//     sum += root.value;
       
//     // if right node exists, traverse recursively 
//     if (root.right) traverseInOrder(root.right);
//   }

//   // invoke helper function
//   traverseInOrder(root);

//   console.log(`The sum is: ${sum} and here are the nodes we visited in in-order: ${values}`)

//   // return sum
//   return sum;
// };

// console.log(bstSumInOrder(tree))


// // // POST ORDER
// const bstSumPostOrder = root => {
//   // // a place to visualize the values (OPTIONAL)
//   let values = [];

//   // declare a variable to store sum
//   let sum = 0;

//   // create helper function to traverse in post-order
//   function traversePostOrder(root) {

//     // edge case if root is null
//     if (!root) return sum;

//     // if left node exists, traverse recursively 
//     if (root.left) traversePostOrder(root.left);
    
//     // if right node exists, traverse recursively 
//     if (root.right) traversePostOrder(root.right);

//     // // push root node to values (OPTIONAL)
//     values.push(root.value);

//     // add current node value to sum
//     sum += root.value;
//   }

//   // invoke helper function
//   traversePostOrder(root);

//   console.log(`The sum is: ${sum} and here are the nodes we visited in post-order: ${values}`)

//   // return sum
//   return sum;
// };

// console.log(bstSumPostOrder(tree))