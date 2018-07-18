/*
A stack is a basic data structure where you can only insert or delete items at the top of the stack. It is kind of similar to a stack of books. If you want to look at a book in the middle of the stack you must take all of the books above it off first.

The stack is considered LIFO (Last In First Out) — meaning the last item you put in the stack is the first item that comes out of the stack

There are three main operations that can be performed on stacks: inserting an item into a stack (called ‘push’), deleting an item from the stack (called ‘pop’), and displaying the contents of the stack (sometimes called ‘pip’).

Stack time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝

functions: push, pop, peek, length

*/


// BELOW FROM FRONTEND MASTERS ALGO COURSE

// Basic Implementation
function Stack(capacity){
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(value){
  if(this.count < this.capacity){
    this.storage[this.count] = value;
    this.count++;
    return this.count;
  }
  return "Max capacity already reached. Remove element before adding a new one.";
}

Stack.prototype.pop = function(){
  if(this.count === 0){
    return "No element inside the stack. Add element before popping.";
  }
  this.count--;
  var value = this.storage[this.count];
  delete this.storage[this.count];
  return value;
}

Stack.prototype.peek = function(){
  return this.storage[this.count - 1];
}

Stack.prototype.size = function(){
  return this.count;
}

stack = new Stack(3);

// Queue with two stacks created above
function QueueWithTwoStacks(){
  this.inStack = new Stack();
  this.outStack = new Stack();
}

QueueWithTwoStacks.prototype.enqueue = function(value){
  this.inStack.push(value);
}

QueueWithTwoStacks.prototype.transferStacks = function(){
  while(this.inStack.size() > 0){
    this.outStack.push(this.inStack.pop());
  }
}

QueueWithTwoStacks.prototype.dequeue = function(){
  if(this.outStack.size() === 0){
    this.transferStacks();
  }
  var el = this.outStack.pop();
  while(this.outStack.size() > 0){
    this.inStack.push(this.outStack.pop());
  }
  return el;
}


// Getting wild
function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.min = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  if(this.count === this.capacity){
    return "Max capacity already reached. Remove element before adding a new one.";
  }
  this.storage[this.count] = value;
  if(this.count === 0){
    this.min[this.count] = value;
  }
  if(value <= this.storage[this.count - 1]){
    this.min[this.count] = value;
  }
  this.count++;
};
// Time complexity: O(1);

Stack.prototype.pop = function() {
  if(this.count === 0) {throw new Error("Empty stack.")};
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  if(result <= this.min[this.count]){
    delete this.min[this.count];
  }
  return result;
};
// Time complexity: O(1);

Stack.prototype.peek = function() {
  return this.storage[this.count];
};
// Time complexity: O(1);

Stack.prototype.count = function() {
  return this.count;
};
// Time complexity: O(1);

Stack.prototype.contains = function(val) {
  for(let key in this.storage){
    if(val === this.storage[key]){
      return true;
    }
  }
  return false;
};
// Time complexity: O(n);

Stack.prototype.getMin = function() {
  return Object.values(this.min)[Object.values(this.min).length - 1];
};



// -------------------------------------------------------------------------------------------------------------------------



// BELOW FROM APPLY ACADEMY



// Using arrays -- using a stack to check for palindrome
// letters array is our stack
var letters = [], word = "racecar", reverse = "";

// push letters of word into stack
for(var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

// pop off the stack in reverse order
for(var i = 0; i < word.length; i++){
  reverse += letters.pop();
}

// check for palindrome
var isPal = (word === reverse) ? true : false;
// console.log(isPal);

// Creating a Stack class
function Stack(){
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function(){
  if(this.count === 0) { return undefined; }
  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.size = function(){
  return this.count;
}

Stack.prototype.peek = function(){
  return this.storage[this.count - 1];
}

var stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());





function Stack(){
  this.count = 0;
  this.storage = [];
}

Stack.prototype.push = function(val){
  this.storage[this.count] = val;
  this.count++;
}

Stack.prototype.pop = function(){
  let result = this.storage.splice(this.storage.length - 1, 1);
  this.count--;
  return result;
}

Stack.prototype.size = function(){
  return this.count;
}

Stack.prototype.peek = function(){
  return this.storage[this.count - 1];
}





// Added way more functionality to check if a value is contained in the stack and get the minimum value in a stack
function Stack(capacity) {
  this.capacity = capacity;
  this.storage = {};
  this.min = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  if(this.count === this.capacity){
    console.log("Max capacity already reached. Remove element before adding a new one.");
    return;
  }
  this.storage[this.count] = value;
  if(this.count === 0){
    this.min[this.count] = value;
  }
  if(value <= this.storage[this.count - 1]){
    this.min[this.count - 1] = value;
  }
  this.count++;
};
// Time complexity: O(1);

Stack.prototype.pop = function() {
  if(this.count === 0) {throw new Error("Empty stack.")};
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  if(result <= this.min[this.count]){
    delete this.min[this.count];
  }
  return result;
};
// Time complexity: O(1);

Stack.prototype.peek = function() {
  return this.storage[this.count];
};
// Time complexity: O(1);

Stack.prototype.count = function() {
  return this.count;
};
// Time complexity: O(1);

Stack.prototype.contains = function(val) {
  for(let key in this.storage){
    if(val === this.storage[key]){
      return true;
    }
  }
  return false;
};
// Time complexity: O(n);

Stack.prototype.getMin = function() {
  return Object.values(this.min)[Object.values(this.min).length - 1];
};
