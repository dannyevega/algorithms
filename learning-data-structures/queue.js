/*
A queue is considered FIFO (First In First Out) to demonstrate the way it accesses data. This means that once a new element is added, all elements that were added before have to be removed before the new element can be removed.

A queue has just two main operations: enqueue and dequeue. Enqueue means to insert an item into the back of the queue and dequeue means removing the front item.

Queue time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝
*/

// BELOW FROM FRONTEND MASTERS ALGO CLASS

function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if(this.count() < this.capacity){
    this.storage[this.tail] = value;
    this.tail++;
    return this.count();
  } else {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
};
// Time complexity: O(1)

Queue.prototype.dequeue = function() {
  if(this.head === this.tail){
    return "Queue is empty.";
  }
  let result = this.storage[this.head];
  delete this.storage[this.head];
  if(this.head < this.tail){
    this.head++;
  }
  return result;
};
// Time complexity: O(1)

Queue.prototype.peek = function() {
  return this.storage[this.tail];
};
// Time complexity: O(1)

Queue.prototype.count = function() {
  return this.tail - this.head;
};
// Time complexity: O(1)

q = new Queue(3);

/*
*** Exercises:
1. Implement a queue using two stacks.
2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
*/

function Queue(){
  this.storage = [];
  this.temp = []
}

Queue.prototype.enqueue = function(val){
  this.storage.push(val);
}

Queue.prototype.dequeue = function(){
  if(this.temp.length === 0){
    while(this.storage.length > 0){
      this.temp.push(this.storage.pop());
    }
    this.temp.pop();
    while(this.temp.length > 0){
      this.storage.push(this.temp.pop());
    }
  }
}



// -------------------------------------------------------------------------------------------------------------------------



// BELOW FROM APPLY ACADEMY

// Creating a Queue class
function Queue(){
  this.collection = [];
}

Queue.prototype.enqueue = function(value){
  this.collection.push(value);
}

Queue.prototype.dequeue = function(){
  this.collection.shift();
}

Queue.prototype.print = function(){
  return this.collection;
}

Queue.prototype.front = function(){
  return this.collection[0];
}

Queue.prototype.size = function(value){
  return this.collection.length;
}

Queue.prototype.isEmpty = function(){
  return (this.collection.length === 0);
}

var queue = new Queue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(9);
console.log(queue.print());
console.log("front: " + queue.front());
console.log("size: " + queue.size());
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue.print());
console.log("front: " + queue.front());
console.log("size: " + queue.size());





// Creating a priority Queue class
function PriorityQueue(){
  this.collection = [];
  this.currentPriority = 0;
}

PriorityQueue.prototype.enqueue = function(element){
  if(this.isEmpty()){
    this.collection.push(element);
  } else {
    var added = false;
    for(var i = 0; i < this.collection.length; i++){
      if(element[1] < this.collection[i][1]){
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if(!added){
      this.collection.push(element);
    }
  }
}

PriorityQueue.prototype.dequeue = function(){
  this.collection.shift();
}

PriorityQueue.prototype.print = function(){
  return this.collection;
}

PriorityQueue.prototype.front = function(){
  return this.collection[0];
}

PriorityQueue.prototype.size = function(value){
  return this.collection.length;
}

PriorityQueue.prototype.isEmpty = function(){
  return (this.collection.length === 0);
}

var pq = new PriorityQueue();
pq.enqueue(["Danny", 3]);
pq.enqueue(["Reynaldo", 1]);
pq.enqueue(["Juanga", 2]);
console.log(pq.print());
console.log("front: " + pq.front());
console.log("size: " + pq.size());
console.log(pq.isEmpty());
pq.dequeue();
console.log(pq.print());
console.log("front: " + pq.front());
console.log("size: " + pq.size());
pq.enqueue(["Ron", 2]);
console.log(pq.print());
console.log("front: " + pq.front());