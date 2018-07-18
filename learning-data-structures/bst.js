/*
A tree is a data structure composed of nodes It has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendents are less than the current node, which is less than the right descendents.

Binary search trees allow fast lookup, addition and removal of items. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

Binary search time complexity
╔═══════════╦══════════╦════════════╗
║ Algorithm ║ Average  ║ Worst Case ║
╠═══════════╬══════════╬════════════╣
║ Space     ║ O(n)     ║ O(n)       ║
║ Search    ║ O(log n) ║ O(n)       ║
║ Insert    ║ O(log n) ║ O(n)       ║
║ Delete    ║ O(log n) ║ O(n)       ║
╚═══════════╩══════════╩════════════╝
*/


function BST(value){
	if(value === undefined){
		throw new Error("Please initiate Binary Search Tree with a root value.");
	}
	this.value = value;
	this.right = null;
	this.left = null;
}

BST.prototype.insert = function(value){
  if(value < this.value){
    if(this.left === null){
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else if(value > this.value){
    if(this.right === null){
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  } else {
    return null;
  }
}

let bst = new BST();
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(8)
bst.insert(1)
bst.insert(9)

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

BST.prototype.contains = function(value){
	if(value === this.value){
		return this;
	} else {
		if(value < this.value){
			if(this.left === null){
				return false;
			} else {
				return this.left.contains(value);
			}
		} else {
			if(this.right === null){
				return false;
			} else {
				return this.right.contains(value);
			}
		}
	}
}

// Depth First Traversal
BST.prototype.inOrder = function(){
	var current = this, result = [];
	function traverse(node){
		if(node.left){
			traverse(node.left);
		}
		result.push(node.value);
		if(node.right){
			traverse(node.right);
		}
	}
	traverse(current);
	return result;
}

BST.prototype.preOrder = function(){
	var current = this, result = [];
	function traverse(node){
		result.push(node.value);
		if(node.left){
			traverse(node.left);
		}
		if(node.right){
			traverse(node.right);
		}
	}
	traverse(current);
	return result;
}

BST.prototype.postOrder = function(){
	var current = this, result = [];
	function traverse(node){
		if(node.left){
			traverse(node.left);
		}
		if(node.right){
			traverse(node.right);
		}
		result.push(node.value);
	}
	traverse(current);
	return result;
}

// Breadth-First Traversal
BST.prototype.breadthFirst = function(){
	var current = this, result = [], queue = [], node;
	queue.push(current);
	while(queue.length > 0){
		node = queue.shift();
		result.push(node.value);
		if(node.left !== null){
			queue.push(node.left);
		}
		if(node.right !== null){
			queue.push(node.right);
		}
	}
	return result;
}

BST.prototype.getMin = function(){
	var current = this;
	while(current.left !== null){
		current = current.left;
	}
	return current;
}

BST.prototype.getMax = function(){
	var current = this;
	while(current.right !== null){
		current = current.right;
	}
	return current;
}

BST.prototype.deleteMinNode = function(parent){
	// no children nodes -- check if parent exists or must be root node if not
	if(this.left === null && this.right === null){
		if(parent){
			parent.left = null;
		} else {
			this.value = null;
		}
	}
	// if node has a right tree -- check if parent exists or must be root node (min node is the head value w/ greater value to right)
	if(this.left === null && this.right){
		if(parent){
			parent.left = this.right;
		} else {
			this.value = this.right.value;
			this.right = this.right.right
		}
	}
	// Heres our main call -- it keeps recursing til it reaches either the leaf or minimum node
	if(this.left){
		this.left.deleteMinNode(this);
	}
	return this;
}

BST.prototype.deleteMaxNode = function(parent){
	if(this.left === null && this.right === null){
		if(parent){
			parent.right = null;
		} else {
			this.value = null;
		}
	}
	if(this.right === null && this.left){
		if(parent){
			parent.right = this.left;
		} else {
			this.value = this.left.value;
			this.left = this.left.left;
		}
	}
	if(this.right){
		this.right.deleteMaxNode(this);
	}
	return this;
}

BST.prototype.remove = function(value){
	let removeNode = (node, value) => {
		if(value === node.value){
			if(node.left === null && node.right === null){
				return null;
			} else if(node.left === null){
				return node.right;
			} else if(node.right === null){
				return node.left;
			} else {
				let temp = node.right;
				while(temp.left !== null){
					temp = temp.left;
				}
				node.value = temp.value;
				node.right = removeNode(node.right, temp.value);
				return node;
			}
		} else if(value < node.value){
			node.left = removeNode(node.left, value);
			return node;
		} else {
			node.right = removeNode(node.right, value);
			return node;
		}
	}
	return removeNode(this, value);
}
