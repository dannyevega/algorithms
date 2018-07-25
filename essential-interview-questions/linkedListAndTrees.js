// Create a funtion that will return the nth child from the end of the linked list.
// Take this list for example: 5 --> 4 --> 3 --> 2 --> 1
// ll.nthFromEnd(3) should return 3 (includes tail)

function Node(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.add = function(value){
  let node = new Node(value), current = this.head;
  if(current === null){
    this.head = node;
    this.tail = this.head;
    this.length++;
    return this;
  } else {
    while(current.next !== null){
      current = current.next;
    }
    this.tail = node;
    current.next = node;
    node.previous = current;    
    this.length++;
    return this;
  }
}

let ll = new LinkedList();
ll.add(5);
ll.add(4);
ll.add(3);
ll.add(2);
ll.add(1);

LinkedList.prototype.nthFromEnd = function(value){
  let current = this.tail;
  if(value > this.length){
    return null;
  } else {
    let count = value - 1;
    while(count > 0){
      current = current.previous;
      count--;
    }
    return current;
  }
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Create a function to check if a tree is a Binary Search Tree.
// Assuming Node will be passed in the following format:
function Node(value){
  if(value === undefined){
    throw new Error("Please initiate Binary Search Tree with a root value.");
  }  
  this.value = value;
  this.left = null;
  this.right = null;
}

Node.prototype.insert = function(value){
  if(value < this.value){
    if(this.left === null){
      this.left = new Node(value);
    } else {
      this.left.insert(value);
    }
  } else if(value > this.value){
    if(this.right === null){
      this.right = new Node(value);
    } else {
      this.right.insert(value);
    }
  } else {
    return null;
  }
}

const isBinarySearchTree = (node, lower = null, upper = null) => {
  if(lower !== null && node.value < lower){
    return false;
  }
  if(upper !== null && node.value > upper){
    return false;
  }
  let isLeftBst = true;
  let isRightBst = true;
  if(node.left !== null){
    isLeftBst = isBinarySearchTree(node.left, lower, node.value);
  }
  if(node.right !== null){
    isRightBst = isBinarySearchTree(node.right, node.value, upper);
  }
  return (isLeftBst && isRightBst);
}

// testing actual BST: should return true
let bst = new Node(3);
bst.insert(1);
bst.insert(5);
bst.insert(0);
bst.insert(2);
bst.insert(4);
bst.insert(6);

// BST
//       3
//   1       5
// 0   2   4   6

// testing regular Non-BST: should return false
let tree = new Node(4);
tree.left = new Node(1);
tree.right = new Node(5);
tree.left.left = new Node(0);
tree.left.right = new Node(2);
tree.right.left = new Node(3);
tree.right.right = new Node(6);

// Basic idea is its recursively checking whether or not the current value is within the lower and upper limits
// Take this tree for example:

// Not BST
//          4
//      1        5
//    0   2    3   6

// with the inital call --> isBinarySearchTree(4, null, null) -- passing the whole node as 'node'
// it recursively runs down the tree setting isLeftBst isRightBst to true

// following the stack:
// initial call isBinarySearchTree(4, null, null);
// 1st call: isLeftBst = isBinarySearchTree(1, null, 4);
// 2nd call: isLeftBst = isBinarySearchTree(0, null, 1);
// 3rd call: isLeftBst = isBinarySearchTree(0, null, 1); // pops off, returns true since at 0, node.left && node.right = null
// Comes back to node 1 with isLeftBst = true; now goes to node.right
// 2nd call: isRightBst = isBinarySearchTree(2, 1, null); // pops off, returns true since at 2, node.left && node.right = null
// 1st call: isLeftBst = isBinarySearchTree(1, null, 4); pops off and returns true since all children are balanced
// Now goes back to isBinarySearchTree(4, null, null) and checks right side
// Eventualy, will get down to node 3 and return false since its not within the limits



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Create a function to find the lowest common ancestor of two nodes.
// For example: lowestCommonAncestor(head, firstNode, secondNode) --> lowestCommonAncestor(8, 4, 6);

// Passing in 8 as the root node, 4 and 6 as the nodes, we want to return 3 -- 3 & 8 are both ancestors of 4 & 6 but 3 is the lowest common one between the two
// lowestCommonAncestor(head, 4, 6) --> 3
// lowestCommonAncestor(head, 3, 8) --> 8 (return head value if either node is the head)
// lowestCommonAncestor(head, 14, 14) --> 14 (return value if nodes passed in are same node value)
// lowestCommonAncestor(head, 4, 21) --> null (return null if node doesnt exist in tree)
// lowestCommonAncestor(null, 3, 8) --> null (return null if root node passed in is null)

//          10

//      5        8

//   9    3    6    4

//      4   2
let lca = new Node(10);
lca.left = new Node(5);
lca.right = new Node(8);
lca.left.left = new Node(9);
lca.left.right = new Node(3);
lca.left.right.left = new Node(4);
lca.left.right.right = new Node(2);
lca.right.left = new Node(6);
lca.right.right = new Node(4);

const lowestCommonAncestor = (node, firstNode, secondNode) => {
  // First, make sure the node passed in not null & both values were checking for exist in the tree. Otherwise, return null
  if(node !== null && node.contains(firstNode) && node.contains(secondNode)){
    // If either of the nodes passed in is the root value, return that root value since that will be the LCA
    if(firstNode === this.value || secondNode === this.value){
      return this;
    }
    // If the nodes passed in are the same value, return that value since that will be the LCA
    if(firstNode === secondNode){
      return firstNode;
    }
  } else {
    return null;
  }
}

const pathToNode = (node, value) => {
  let stack = [];
  if(node === null){
    return null;
  } else if (node.value === value){
    stack.push(value)
  } else {
    let leftPath = pathToNode(node.left, value);
    if(leftPath !== null){
      stack.push(node);
      return stack;
    }
    let rightPath = pathToNode(node.left, value);
    if(rightPath !== null){
      stack.push(node);
      return stack;
    }
  }
}

