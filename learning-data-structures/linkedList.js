/*
A linked list is one of the most basic data structures. It is often compared to an array since many other data structures can be implemented with either an array or a linked list. They each have advantages and disadvantages.

A linked list consists of a group of nodes which together represent a sequence. Each node contains two things: the actual data being stored (which can be basically any type of data) and a pointer (or link) to the next node in the sequence. There are also doubly linked lists where each node has a pointer to both the next item and the previous item in the list.

The most basic operations in a linked list are adding an item to the list, deleting an item from the list, and searching the list for an item.

Linked list time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝

*/

function LinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

LinkedList.prototype.addStart = function(value){
  let node = new Node(value), current = this.head;
  if(current === null){
    this.head = node;
    this.tail = this.head;
    this.length++;
    return this;
  } else {
    this.head = node;
    node.next = current;
    current.previous = node;
    this.length++;
    return this;
  }
}

LinkedList.prototype.add = function(value){
  let node = new Node(value), current = this.head;
  if(current === null){
    this.addStart(value);
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

LinkedList.prototype.addAt = function(position, value){
  let node = new Node(value), current = this.head, prev = null, count = 1;
  // call addStart since position is 1
  if(position === 1){
    this.addStart(value);
    return this;
    // call add since position is the length of the list i.e wants to add at last node position
  } else if(position === (this.length + 1)){
    this.add(value);
    return this;
    // throw error if position is greater than available nodes in list
  } else if(position > (this.length + 1)){
    throw new Error("Position is greater than length of LinkedList.");
  } else {
    while(count < position){
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = node;
    node.previous = prev;
    node.next = current;
    current.previous = node;
    this.length++;
    return this;
  }
}

LinkedList.prototype.removeStart = function(){
  let head = this.head;
  // if list is empty
  if(this.head === null){
    throw new Error("List is empty.");
    // if list only has one node
  } else if(this.length === 1){
    this.head = null;
    this.tail = null;
    this.length--;
    return this;
    // if list has at least 2 nodes
  } else {
    this.head = head.next
    this.head.previous = null;
    this.length--;
    return this;
  }
}

LinkedList.prototype.remove = function(){   
  if(this.head === null){
    throw new Error("List is empty.");
  } else if(this.length === 1){
    this.removeStart();
    return this;
  } else {
    let tail = this.tail;
    this.tail = tail.previous;
    this.tail.next = null;
    this.length--;
    return this;
  }
}

LinkedList.prototype.removeAt = function(position){
  let current = this.head, prev = null, count = 1;
  if(position === 1){
    this.removeStart();
    return this;
  } else if(position === this.length){
    this.remove();
    return this;
  } else if(position > this.length){
    throw new Error("Position doesn't exist in list.");
  } else {
    while(count < position){
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
    current.next.previous = prev;
    this.length--;
    return this;
  }
}

LinkedList.prototype.search = function(value){
  let current = this.head;
  while(current){
    if(current.value === value){
      return current;
    }
    current = current.next;
  }
  return "Node not found.";
}

LinkedList.prototype.indexOf = function(value){
  let current = this.head, result = [], count = 0;
  while(current){
    if(current.value === value){
      result.push(count);
    }
    current = current.next;
    count++;
  }
  if(result.length === 0){
    return `No nodes with value ${value} were found in this list.`;
  } else {
    return result;
  }
}

let linky = new LinkedList();
linky.add(2);
linky.addStart(1);
linky.addAt(1,0);
linky.addAt(3,3);
linky.addAt(6,999);

linky.removeStart(); // 1, 3, 2
linky.remove() // 1, 3
linky.add(666); // 1, 3, 666
linky.add(999); // 1, 3, 666, 999
linky.add(444) // 1, 3, 666, 999, 444
linky.removeAt(1); // 3, 666, 999, 444
linky.removeAt(4); // 3, 666, 999
linky.removeAt(2); // 3, 999