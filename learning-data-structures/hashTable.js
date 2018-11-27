/*
A Hash table is a very powerful data structure because they provide us with constant time lookup AND insertion


Hash time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║         ║            ║
║ Search    ║ O(1)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(n)       ║
║ Delete    ║         ║            ║
╚═══════════╩═════════╩════════════╝
*/

function Node(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

function HashTable(size){
  this.buckets = new Array(size);
  this.length = this.buckets.length;
}

HashTable.prototype.hash = function(key){
  let total = 0;
  for(let i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  return total % this.length;
}

HashTable.prototype.insert = function(key, value){
  let index = this.hash(key);
  if(this.buckets[index] === undefined){
    this.buckets[index] = new Node(key, value);
    return this.buckets[index];
  } else {
    let current = this.buckets[index];
    while(current.next !== null){
      current = current.next;
    }
    current.next = new Node(key, value);
    return current.next;
  }
}

HashTable.prototype.update = function(key, value){
  let index = this.hash(key);
  if(this.buckets[index] === undefined){
    return "Node does not exist. Please use 'insert' method to add a new node";
  }  
  if(this.buckets[index].key === key){
    this.buckets[index].value = value;
    return this.buckets[index];
  } else {
    let current = this.buckets[index];
    while(current.next){
      if(current.next.key === key){
        current.next.value = value;
        return current.next;
      }
      current = current.next;
    }
    return 'Node not found';
  }
}

HashTable.prototype.get = function(key){
  let index = this.hash(key);
  if(this.buckets[index] === undefined){
    return null;
  } else {
    let current = this.buckets[index];
    while(current){
      if(current.key === key){
        return current.value;
      }
      current = current.next;
    }
  }
}

HashTable.prototype.returnAllNodes = function(){
  let nodes = [];
  for(let i = 0; i < this.length; i++){
    let current = this.buckets[i];
    while(current){
      nodes.push(current);
      current = current.next;
    }
  }
  return nodes;
}

let hashy = new HashTable(30);
hashy.insert('Dean', 'dean@gmail.com');
hashy.insert('Megan', 'megan@gmail.com');
hashy.insert('Dane', 'dane@yahoo.com');
hashy.insert('Dena', 'torta@aol.com');
hashy.insert('Joe', 'joelife@outlook.com');
hashy.insert('Samantha', 'sammy420@hotmail.com');

hashy.update('Dean', 'deanmachine@gmail.com');
hashy.update('Megan', 'bhpanon@aol.com');
hashy.update('Dane', 'danebringthepain@gmail.com');





















// With notes
function Node(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

function HashTable(size){
  this.buckets = new Array(size);
  this.length = this.buckets.length;
}

// Hash function -- gets the uni character code for each character in the string and adds all the values into one sum
// return that sum modulus the length of the Hash size to get the bucket well be inserting the Node object into
HashTable.prototype.hash = function(key){
  let total = 0;
  for(let i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  return total % this.length;
}

HashTable.prototype.insert = function(key, value){
  let index = this.hash(key); // get the bucket were going to insert the Node into
  if(this.buckets[index] === undefined){ // if current bucket is empty, insert new node into that bucket
    this.buckets[index] = new Node(key, value);
  } else {
    // Same as linked list, continue iterating til we reach the end of list and add new Node at end of list
    let current = this.buckets[index];
    while(current.next !== null){
      current = current.next;
    }
    current.next = new Node(key, value);
  }
}

HashTable.prototype.update = function(key, value){
  // get the bucket were going to insert the Node into
  let index = this.hash(key);

  // Check if Node were trying to update even exists
  if(this.buckets[index] === undefined){
    return "Node does not exist. Please use 'insert' method to add a new node";
  }

  // In the case we have a linked list in our bucket, we check if the first Node in the bucket is the one we want to update
  if(this.buckets[index].key === key){
    this.buckets[index].value = value;
  } else {
    // Otherwise, like a linked list, continue checking for the next node to update -- if found, update the Node
    let current = this.buckets[index];
    while(current.next){
      if(current.next.key === key){
        current.next.value = value;
        return;
      }
    }
  }
}
