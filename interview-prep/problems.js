// Write a function called tripleAdd that when invoked, returns the sum all 3 numbers

// tripleAdd(10)(20)(30)

const tripleAdd = (first) => {
  return (second) =>{
    return (third) => {
      return first + second + third;
    }
  }
}

// console.log(tripleAdd(10)(20)(30));

// const tripleAdd = (numArgs) => {
//   let result = [];
//   const _curried = (num) => {
//     result.push(num);
//     if(result.length === numArgs){
//       let total = 0;
//       result.forEach(num => {
//         total += num;
//       });
//       return total;
//     } else {
//       return _curried;
//     }
//   }
//   return _curried;
// }

// console.log(tripleAdd(3)(10)(20)(30));



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is an IIFE and why is it used?

// an IIFE is an immediately invoked funtion expression. Its executed right after its created.
// You'd use an IIFE to encapsulate variables and scope. IIFE ensures there will be no collisions and makes code safe by having a separate execution context -- you won't be overriding any global variables. Many JS frameworks use this

// example:
(function(num){
  // console.log(num * 2);
})(2);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// You have the following piece of code. What will be alerted when you click on button 5? Why is this?

function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
 
createButtons();

// 'This is button 6' will be alerted
// The reason is because we are not invoking the onclick function until after the buttons have been created. We're only setting the onclick function to an anyonmous function with the current value of i. The value of i is what it is at the moment that we execute the function. The for-loop runs and iterates until i is no longer true. At the end of the for-loop, the value of i is 6 and because of closures, the anonymous function for onclick has a reference to the value of i which was 6 at the time it ended

// we can fix this solution a few ways:

// 1. we can use the keyword let since let is block scoped and allows us to keep the value of i as you'd expected when clicked
// 2. we can wrap the anonymous function in an IIFE and pass a reference to i
// 3. we can create another function to pass references to the button and i and return the onclick functionality
// 4. we can use .bind to pass a reference to i

// solution 1:
function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}

// solution 2:
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = (function(j){
       return function() {
          alert('This is button ' + j);
       }
     })(i);
     body.appendChild(button);
   }
}

// solution 3
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     addClick(button, i);
     body.appendChild(button);
   }
}

function addClick(button, num){
  button.onclick = function() {
      alert('This is button ' + num);
  }  
}

// solution 4
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function(j) {
          alert('This is button ' + j);
     }.bind(this, i);
     body.appendChild(button);
   }
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is a closure and write an example.

// In simple terms, a closure is an inner function that has access to the scope of the enclosing or parent function. Similar to IIFE's, closures are a great way to protect variables and functions from the global scope. A closure has access to 3 separate scopes: 
  // 1. its own scope
  // 2. its parent scope
  // 3. the global scope

function greeting(name){
  return function(phrase){
    console.log(`${phrase} ${name}!`);
  }
}

const globalVar = 'outside';
function parent(one){
  const parentVar = 'im the parent';
  function child(two){
    const childVar = 'im the child';
    console.log('globalVar', globalVar);
    console.log('parentVar', parentVar);
    console.log('childVar', childVar);
    console.log('one', one);
    console.log('two', two);
  }
  child('child')
}

parent('parent');



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is the keyword 'this' and how is it used?

// There's no simple explanation for the keyword 'this'. In simple terms, it refers to whatever object it is directly inside of. If the new keyword is used when calling the function, this inside the function is a brand new object. You can use .bind, .call and .apply to control the reference of 'this' If a function is called as a method, such as obj.method() — this is the object that the function is a property of. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. Using the arrow function ignores all the rules above and receives the this value of its surrounding scope at the time it is created

// Here's an object for example:

function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const danny = new Person('Danny', 'Vega', 29);
const amanda = new Person('Amanda', 'Woods', 22);

Person.prototype.getFullName = function(){
  return `Hi I'm ${this.firstName} ${this.lastName}`;
}

danny.getFullName(); // Hi I'm Danny Vega
amanda.getFullName(); // Hi I'm Amanda Woods



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Describe what variable and function hoisting is and how does they work.

// HOISTING -- > JS sets up memory space for variables and functions known as Hoisting. Its not actually moving code to the top of the file. All this means is that before our code begins to be executed line by line, the JS engine has already set aside memory space for the variables, variable expressions and functions declarations you created in the code youve built. These all exist in memory. When the code begins to run line by line, it can acess them.

// Variables and functions expressions are not hoisted in the way you'd expect. You wont be able to invoke a function expression before it is defined same as a variable. Function declarations can be invoked before they are defined.


// function declaration
b(); // will work as normal due to hoisting
function b(){
  console.log('hi there');
}


// variables
console.log(a); // will print undefined
var a = 'hello';
console.log(a); // now this will print hello as expected because var a has been defined
// JS is doing this to variable a. It is hoisting the declaration to the top of the scope and it doesnt define the variable until it reaches the line in the code where its defined
var a;
a = 'hello';


// function expression
exp(); // will throw an error saying exp is not a function
var exp = function(){
  console.log('whats up!');
}
exp(); // will print as normal
// JS is doing the same to variable exp. Its being hoisted to the top of the scope and set to undefined in memory. When it hits the function invocation, JS engine is correct. Its not a function because it is simply a variable set to undefined at that time.

// when JS sets up memory space for variable a and exp, it doesn't know what its value will be until it gets executed. So instead, it puts a placeholder of undefined. This just means it recognizes the variable but doesn't know the ultimate value yet.

// All variables in JS are initially set to undefined and functions declarations are siting there in their entirety.

// Variables, function expression and function declarations will be hoisted to top of their context. So it could be to the top global level or to the top of an encompassing function

// var is function scoped (global & function scope)

// const and let are block scoped (global, function and block scope)
function getTotal(){

  let total = 0;
  for(var i = 0; i < 10; i++){
    let valueToAdd = i;
    var multiplier = 2;
    total += (valueToAdd * multiplier);
  }
  return total;

}

// getTotal();

// under the JS hood, the getTotal function looks like this:
function getTotal(){
  let total;
  var multiplier;
  var i;

  total = 0;
  for(i = 0; i < 10; i++){
    let valueToAdd;

    valueToAdd = i;
    multiplier = 2;
    total += (valueToAdd * multiplier);
  }
  return total;
}

// if you were to try and console.log multiplier and total:
function getTotal(){
  console.log(total) // total is not defined -- this is because total was declared with let -- keywords with let and const arent initialized until theyve been declared -- but they are hoisted
  console.log(multiplier) // undefined

  let total = 0;
  for(var i = 0; i < 10; i++){
    let valueToAdd = i;
    var multiplier = 2;
    total += (valueToAdd * multiplier);
  }
  return total;

}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Scope and 'self' -- take a look at the code below. What will be logged to the console?

var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
 
myCar.logColor();

// lines 307and 308 inside the logColor method will print 'Blue' as expected

// line 310 inside IIFE will print undefined -- the 'this' keyword here is referencing the scope of the IIFE itself and has lost reference to the object myCar. So the 'this' keyword here is referencing the global object and there is no color property on the global scope

// line 311 inside IIFE will print 'Blue' because the variable self is referencing the myCar object

// using 'self' is common in JS -- it stores a reference to a scope or context you want to use later in your code



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is the difference between == and ===?

// They are both comparison operators.
// == (equals) tests for abstract equaility
  // doesnt test for data type
  console.log(7 == '7');
    // using equals, this will log true because == will convert both pieces of data to the same type then compare
    // numbers & strings --> string is converted to number then compared
    // boolean & non-boolean --> non-boolean is converted to boolean then compared
    // objects & primitive data types --> object is converted to primitive data type (such as string or number) then compared
// === (strict equals) tests for strict equality
  // tests data type
  console.log(7 === '7');
  // using strict equals, this will log false because they are of different data types



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Take a look at the code below. What will be logged to the console when the function is invoked?

var num = 50;
 
function logNumber() {
    console.log(num);
    var num = 100;
}
 
logNumber(); // undefined

// the logNumber function will print undefined because variables are function scoped. Even though theres a variable num in the global scope, there is another variable num that is in the logNumber function itself. This variable num inside logNumber will be hoisted to the top and set to undefined. By the time the JS engine hits the console.log on 344, num is set to undefined



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What does 'strict' mode do to your code? What are the benefits of using 'strict'?

  // Main puprose: it enforces stricter parsing and error handling in your code

  // some things strict mode enforces:
    // it prevents the use of global variables
    // wont let you do the following:
    'use strict';

    city = 'London'
    console.log(city)  // with strict mode enforced, it will throw an error saying city is not defined

    // all parameter names for a function must be unique
    'use strict';

    function foo(a, a, b){
      console.log(a, a, b);
    }
    foo(1,4,7) // SyntaxError: Argument name clash in strict mode
    // if you removed strict statement, no errors will be thrown but this can lead to bugs down the road that will be difficult to debug

    // it'll throw an error if you try to delete any properties on objects that arent deletable
    'use strict';

    delete Object.prototype; // TypeError: cannot delete property 'prototype' of function Object()



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Take a look at the code below and write a curried version.

function getProduct(num1, num2) {
  return num1 * num2;
}

// function getProductCurried(num1){
//   return function(num2){
//     return num1 * num2;
//   }
// }

function getProductCurried(args){
  let result = [];
  function _curried(num){
    result.push(num);
    if(result.length === args){
      let total = 1;
      result.forEach(num => {
        total *= num;
      });
      return total;
    } else {
      return _curried;
    }
  }
  return _curried;
}

// Currying is a useful technique used in many practical ways

// function getTravelTime(distance, speed){
//   return distance / speed;
// }

// what if you want to calculate the time it takes to travel somewhere given in kilometers divided by MPH
// Lets say NY to Boston would always be 400 kilometers
// you could do the following:

// getTravelTime(400, 50);
// getTravelTime(400, 60);
// getTravelTime(400, 80);

// this gets repetitive and you're writing a lot of the same thing over -- with currying, we can set our distance to always be 400 kilometers

function getTravelTime(distance){
  return function(speed){
    return distance / speed;
  }
}

const nyToBoston = getTravelTime(400);
// nyToBoston(50);
// nyToBoston(60);
// nyToBoston(80);

// another example:

// function currying -- using .bind
function multiply(a, b){
  return a * b;
}

var byTwo = multiply.bind(this, 2); // by passing in the 'this' keyword, were setting the refernce to this variable indefinetely -- passing the 2 means the first argument (a) will always be a 2
// doing it this way is essentially saying, give me a copy of the mutliply function with the 'this' variable set up and we also permanently set 2 as the first parameter

// line 70 is essentially saying this below:
function byTwo(b){
  var a = 2;
  return a * b;
}

console.log(byTwo(4)); // 8

var byThree = multiply.bind(this, 3);
console.log(byThree(4)); // 12


// Function currying -- creating a copy of a function but with some preset parameters -- very useful for mathematical situations



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Write a function that keeps track of how many time it was called -- then return that number.

// foo() --> returns 1
// foo() --> returns 2
// foo() --> returns 3


// Create a closure inside the function that increases the count and returns the count.
function foo(){
  let count = 0;

  return function(){
    count++;
    return count;
  };
}

// create an instance of the function to keep track of each separate count
const count1 = foo();
count1();
count1();
count1();

const count2 = foo();
count2();
count2();
count2();



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Take a look at the code below. What is the value of x when it is logged out? What is the value of y when it is logged out?

(function() {
  var x = y = 200;
})();
 
console.log('y: ', y); // y: 200
console.log('x: ', x); // Uncaught ReferenceError: x is not defined

// The IIFE runs and executes immediately
// The trick here is the way the variables are defined inside of the IIFE
// This is essentially whats going on under the hood:
  // y = 200 --> set on global scope since not declared with a var, let or const
  // var x = y;
// Since x is declared with a var keyword, its scope exists only inside the IIFE so when we try to log it after, JS is correct as in x is not defined

// Great use case for strict mode! If you use strict mode, an error will occur right away and neither x or y will be defined



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Describe .call() and .apply() methods. How do they function? What arguments do they take? How are they different?

// We use call, bind and apply to control what 'this' refers to when the execution context is created. They give us another way to pass arguments to a function -- allows us to 'borrow' functions! They are native JS methods on the Function Prototype Object

var person = {
  firstName: "Ron",
  lastName: "Doe",
  getFullName: function(){
    var fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

var logName = function(){
  console.log('Logged: ' + this.getFullName());
}

logName(); // TypeError: this.getFullName is not a function -- since there is no getFullName function on the global scope -- the 'this' keyword has lost reference in this function expression

// Using .call(), first argument is the object we want to reference and any other arguments separated by comma
logName.call(person);

// Using .apply(), first argument is the object we want to reference and any other arguments inside an array
logName.apply(person, []);

// another example:
const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};

const car2 = {
  brand: 'Ferrari';
}

// using .call();
car1.getCarDescription.call(car2, '120000', 2018, 'yellow');

const car3 = {
  brand: 'Lamborghini';
}

// using .apply():
car1.getCarDescription.apply(car3, ['220000', 2018, 'lime green']);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Take at the code below. 
// PART 1: What will list2 contain when we log it to the console?

let list1 = [1, 2, 3, 4, 5];
let list2 = list1;
 
list1.push(6, 7, 8);
 
console.log(list2); // [1, 2, 3, 4, 5, 6, 7, 8];

// Answer: passing data by reference vs. passing data by value
// in JS, when we assign a variable to a piece of data, we are always passing data by value or by reference
// passing by value:
  // primtive data type or has no properties such as a string or number, then data is passed by value
  // a variable holding data by value, you are setting that variable equal to the value of the data

  // example passing by value:
  let myNum = 10;
  let myString = 'Gucci!';
  let myString2 = myString; // set to value of myString i.e. Gucci!

// passing by reference:
  // remember, almost everything in JS is an Object.
  // Any variable set to anything other than primitive data type is being passed by reference including arrays

  let list2 = list1; // this is not saying list2 = [1, 2, 3, 4, 5] as in a totally different array

  // list2 is referencing the exact same array list1 is referencing
  // so when we change list1, we are changing list2 as well since they are referencing the same array

  // if we were to change the refernce list1 is pointing to, list2 will still be pointing to the original array since that is what we initially set it to
  list1 = [10, 20, 30];
  console.log(list2); // [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(list1); // [10, 20, 30]



// PART 2: How can we set list2 equal to an array that has the same values as list1 without actually referencing the same underlying array list1 does?

// Answer: make a copy of the original array and set it equal to list2

// using .slice();
let list1 = [1, 2, 3, 4, 5];
let list2 = list1.slice();
 
list1.push(6, 7, 8);

console.log(list1); // [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list2); // [1, 2, 3, 4, 5];

// using .concat(); 
let list1 = [1, 2, 3, 4, 5];
let list2 = list1.concat([]); // adding list1 array to empty array and returning that newly created array
 
list1.push(6, 7, 8);

console.log(list1); // [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list2); // [1, 2, 3, 4, 5];



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Write a function that can be invoked two different ways: singly invoked or bouldy invoked.
// singly invoked: two numbers passed in as arguments getTotal(10, 20);
// doubly invoked: each function invocation takes in a single number (currying) getTotal(10)(20);

// getTotal(10, 20);
// getTotal(10)(20);

function getTotal(first, ...rest){
  if(rest.length !== 0){
    return first + rest[0];
  } else {
    return function(second){
      return first + second;
    }
  }
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Describe what JSON format is. Then, delete any data types not allowed in JSON format. Finally, replace all placeholder text with its respective data type.

// JSON - JavaScript Object Notation. It's a lightweight format for transferring data. Data transfer can be different functions in code, between different applications or data transfer from an API. Its easy for humans to understand and easy for computers to parse and generate. Its only used as a data description language, its only purpose is to pass data.

const myJsonObj = {
  myString: [some string],
  myNumber: [some number],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined],
  myArray: [some array],
  myFunction: [some function],
  myObject: [some object]
};

// after deletion: only undefined and functions are not allowed in JSON

// Every property on a JSON object is a string and only use double quotes

const myJsonObj = {
  "myString": "string",
  "myNumber": 29,
  "myNull": null,
  "myBoolean": true,
  "myArray": ["some", "array"],
  "myObject": { "name": "Danny" }
};



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What order will the 4 numbers be logged out in?

function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}
 
logNumbers(); // 1, 4, 3, 2

// JS engine goes line by line. It will first log 1.
// Then it hits a setTimeout function so it adds this function call to the stack in the event loop and waits to be executed.
// The next line is also a setTimeout function so its put on the stack. Even though it is 0 seconds, it is still added to the stack because its a setTimeout function (a trick used to do something later even if 0 time).
// Then it logs 4. The second timeout finishes first so 3 is logged then the first set timeout is logged after 1 second.



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// List and describe 3 different ways to make an Object.

// 1. Object literal syntax - define an object and all of its properties and methods right inside of it
const boat = {
  length: 24,
  maxSpeed: 50,
  passengers: 14,
  getLength: function(){
    return this.length;
  }
}

// 2. 'new' keyword and Object constructor
const student = new Object();

student.grade = 12;
student.gpa = 3.8;
student.classes = ['English', 'Calculus', 'Chemistry'];
student.getClasses= function(){
  return this.classes;
}

// 3. Object.create()
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"

// 4. Create new instance from function constructor
function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getName = function(){
  return `${this.firstName} ${this.lastName}`;
}

const danny = new Person('Danny', 'Vega', 29);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is logged for each of the data types?

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object

// Almost everything in JS is an Object!

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log([] instanceof Array); // true
console.log({} instanceof Array); // false



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Describe the .bind() method. How does it work and explain the parameters it takes.

// We use call, bind and apply to control what 'this' refers to when the execution context is created. They give us another way to pass arguments to a function -- allows us to 'borrow' functions! They are native JS methods on the Function Prototype Object

// Were able to bind a function to a certain 'this' context -- whatever we pass in. It also allows you to defined parameters that you want hold constant as well

var person = {
  firstName: "Ron",
  lastName: "Doe",
  getFullName: function(){
    var fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

var logName = function(){
  console.log('Logged: ' + this.getFullName());
}

logName(); // TypeError: this.getFullName is not a function -- since there is no getFullName function on the global scope -- the 'this' keyword has lost reference in this function expression

var logPersonName = logName.bind(person);
logPersonName();  // now this works



const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption){
    return this.distance;
  }
}

const roadTrip2 = {
  distance: 5000
}

const getTripDistance = roadTrip1.getDistance;
getTripDistance(); // will print undefined

const boundTripDistance = roadTrip1.getDistance.bind(roadTrip1, 'km');
boundTripDistance(' left to go.');

const boundRoadTrip2 = roadTrip1.getDistance.bind(roadTrip2, 'km');
boundRoadTrip2(' in total.');



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What will be logged from the following?

const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
console.log(user1 == user2); // false
console.log(user1 === user2); // false

// Two different objects are never equal to each other. In JS, we pass Objects by reference, not value.

// If you do this instead, then they will be referencing the same object so the statements will print true:
const user2 = user1;

// this will print true because were only comparing the contents of the object which we turn into strings:
console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is printed by each console.log statement?

var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
 
console.log('arr1: ', arr1); // []
console.log('arr2: ', arr2); // [empty x 50];
console.log('arr3: ', arr3); // [1, 2, "three", 4, "five"]
console.log('arr4: ', arr4); // [[1, 2, 3, 4, 5]]



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is printed by each console.log statement?

console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1 --> two different objects are NEVER the same!
console.log('hello world'.indexOf('o')); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); // -1 --> two different Arrays are NEVER the same!

// Arrays and Objects are passed by reference in JS

// If two different variables or more reference the same underlying object, then they are equal. For example:
const myArr = [5];
const anotherArr = myArr;
console.log([[1], [2], [3], [4], myArr].indexOf(myArr)); // 4
console.log([[1], [2], [3], [4], myArr].indexOf(anotherArr)); // 4



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What will be logged by this expression?

console.log(900.9 === 300.3 * 3); // false

// Because of the way theyre binary encoded in JS, some decimals cant be expressed accurately 

// Ways to get around this:
(300.3 * 3).toFixed(2); // returns number as string
Number((300.3 * 3).toFixed(2));

(300.3 * 3).toPrecision(12); // returns number as string
Number((300.3 * 3).toPrecision(12)); // returns number as string



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is printed by each console.log statement?

var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2);

// Strings are passed by value in JS, resetting string1 to Venice has no effect on string2
 
////////////////////////////////

var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';
 
console.log(person1);

// Objects are passed by reference in JS, they reference the same underlying Object
// So resetting the name property on person2 is going to change the name property on person1 as well
// person1 and person2 variables both reference the same underlying object



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is printed by the console.log statement?

const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
console.log(data2); // ['S', 'M', 'I', 'T', 'H'];

// you can use some array methods on strings
// you can only use 'read-only' methods on strings: filter, forEach, map, some, every, etc..
// cannot use: push, pop, splice, shift, reverse etc...these would manipulate!



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is printed by the console.log statement?

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
a[c] = 400;
 
console.log(a[b]); // 400

// You can only set keys in Objects as strings so how is 400 being printed?
// JS knows only strings are allowed on properties on Objects so when we try to place b object as a property on a object
// JS coerces the b object into a string --> '[object Object]'
// On the next line, were doing the same thing with the c object which is converted to the same string --> '[object Object]' with a value of 400
// Since b object and c object are both same string as '[object Object]', JS takes the most recent value set which was 400



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is printed by the console.log statement?

var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {}
}
 
y();
 
console.log(x); // 10

// Global variable x set to 10
// Function y defined and inside, x is set to 100 then it returns
// Function x is defined below return statement
// so what happens when we invoke y then print x?

// this is an example of hoisting
// inside the function y, function x is being hoisted to the top of the function scope
// remember, all functions declarations and variables are hoisted
// under the hood:

function y() {
    function x() {}
    x = 100;
    return;
    // function x() {}
}

// we now have a variable x defined locally inside of our function y's scope
// the next line then reassigns the local variable x to equal 100
// then we hit our return statement so x is never reassigned to be a function

// we print the global variable x instead of the local scoping you might think



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// What is going to be printed by the console.log statements?

const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};
 
const account2 = {
  name: 'James',
  totalAmount: 8000,
};
 
const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};
 
console.log(withdrawFromAccount(500)()); // 7500
console.log(withdrawFromAccount(200)()); // 7300
