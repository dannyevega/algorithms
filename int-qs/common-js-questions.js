// 1. What will the following code output to the console and why?
const employee = {
  firstName: 'Chloe',
  getName: function() {
    return this.firstName;
  }
};

const getEmployeeName = employee.getName;

// console.log(getEmployeeName()); // undefined
// console.log(employee.getName()); // Chloe

// ANSWER
// employee.getName() will return undefined -- this is testing scope and how each function call creates a new scope. the getName function has lost reference to 'this' -- we can fix this by binding the object
const boundGetEmployeeName = employee.getName.bind(employee);
// console.log(boundGetEmployeeName()); // 'Chloe'





// 2. What will the following code log out to the console and why?
var x = 10;
function outerFunc(){
  var x = 20;
  function innerFunc(){
    x++;
    var x = 30;
    console.log(x);
  }
  innerFunc();
}
// console.log(outerFunc()); // 30

// ANSWER
// The output to the console will be 30. This is because although our innerFunc is a closure and it has access to the x variable on the global scope (10) and the x variable in the scope of the outerFunc (20) - since there is an x variable inside of the innerFunc, that is the one that takes precedence in this situation and it is the one that is referenced inside of our console.log.





// 3. What will be the output of the code below?
var Student = {
  school: 'Stanford'
};

var student1 = Object.create(Student);
delete student1.school;

// console.log(student1.school);

// ANSWER
// The output will be Stanford. This is because when we do Object.create(Student) we are setting the prototype object of student1 equal to the Student object. So the property school is not present on the student1 object, but instead it is present on the __proto__ of student1. When we run delete student1.school, the school property is not deleted from the __proto__ of student1. And since the school property is still on the __proto__ of student1, we can access it by doing console.log(student1.school). If we were, however, to do delete student1.__proto__.school, then the school property would be deleted from the __proto__ of student1 and we would get undefined as our final output.





// 4. Write a function that will spiral a matrix.
// Input: matrix below
// Output: [ 0, 1, 2, 3, 4, 9, 8, 7, 6, 5, 10, 11, 12, 13, 14, 19, 18, 17, 16, 15 ]
var mtx = [
 [0,  1, 2,  3, 4],
 [5,  6, 7,  8, 9],
 [10, 11, 12, 13, 14],
 [15, 16, 17, 18, 19]
];

let result = [];
for(let i = 0; i < mtx.length; i++){
  let current = mtx[i];
  let count = 4;
  for(let j = 0; j < current.length; j++){    
    if(i % 2 === 0){
      result.push(current[j]);
    } else {
      result.push(current[count]);
      count--;
    }    
  }
}





// 6. What will the following code output to the console and why?
// (function(x) {
//    return (function(y) {
//        console.log(x);
//    })(500)
// })(100);

// ANSWER
// The code will log the value 100 to the console even though a variable x is never declared in the code snippet. 100 is logged out because our inner function is a closure, therefore it has access to the variables and parameters that are available in the scope of the function that encloses it - which includes the parameter x that is passed into our outer function.





// 7. What will the following code log out to the console?
// will print 1, 2, 3, 4, 5, 6, 7
// for (let i = 1; i <= 7; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000 );
// }

// using var, we can pass an IIFE and pass a referene to i like this:
// for (var i = 1; i <= 7; i++) {
//   (function(x){
//     setTimeout(function() {
//       console.log(x);
//     }, x * 1000 );    
//   }(i));
// }

// ASNWER
// The values 1, 2, 3, 4, 5, 6, 7 will be logged out to the console because we are using the keyword let in our for loop, which is block scoped, unlike the keyword var which is function scoped. If we used the keyword var, it would log 8 everytime since the value of i === 8 since that is the value of i after the for loops complete





// 10. How can we completely empty the given array below?
var arrayOne = ['red', 'green', 'blue', 'yellow'];

// Solution 1:
// We can set arrayOne equal to an empty array, but this could cause some problems for us in the future because arrayOne is now referencing a different array than it was originally. If we ever needed to reference the original array that we were pointing to we would no longer be able to do that with this solution.
arrayOne = []

// Solution 2:
// We can use the splice method on arrayOne from position 0 all the way through the end of the array. This will empty the entire array for us and it will also allow us to continue referencing the same exact array which could save us from running into some problems down the line in our code.
arrayOne.splice(0, arrayOne.length);

// Solution 3:
// We could set the length of arrayOne equal to 0. This would empty the array for us and would also preserve our reference to our original array as well.
arrayOne.length = 0;





// 11. What will be logged out to the console from the code below?
var car = {
  brand: 'Ford'
};
car.price = 20000;
car['location'] = 'USA';

// Object.defineProperty(car, 'color', {
//   value: 'blue'
// });

// console.log(Object.keys(car)); // [ 'brand', 'price', 'location' ]

// The color property does not appear when we do Object.keys(car) because we have used the Object.defineProperty method to set the color property on our car object. When we use the Object.defineProperty method to assign a property to an object, that property is defaulted to enumerable: false, which means that it is not iterated over within a loop. Although the property is enumerable, it can still be accessed by doing console.log(car.color). We can make the color property enumerable by changing the above code to this:

Object.defineProperty(car, 'color', {
  value: 'blue',
  enumerable: true
});





// 12. What will be the output of the following code?
var x = { firstName : 'Sam' };

var data = (function(){
  delete x.firstName;
  return x.firstName;
})();

// console.log(data); // undefined

// ANSWER
// The output will be the value undefined. data is logged out as a value (undefined) and not a function because the function that data is set equal to is an IIFE, which is executed immediately and returns the value of x.firstName. x.firstName evaluates to undefined because the variable x inside of the IIFE references the x object on the global scope, since there is no variable x inside the scope of the IIFE. Then we use the delete operator to delete the firstName property on the x object, so when we return x.firstName we get undefined.





// 13. What is the difference between the two functions declared below?
var func1 = function(x) { 
  return x;
};

function func2(x) { 
  return x;
};

// ANSWER
// The difference between the two functions is that func1 is being declared as a function expression and func2 is being declared as a function declaration. One major difference in these two different styles of declaring a function is how they are hoisted. In javascript, all variables and functions are hoisted to the top of the scope that they are declared in. For a function expression (func1), only the function name (func1) is hoisted, whereas for a function declaration (func2), the entire function definition is hoisted. One major side effect of this is that you will not be able to use func1 before/above where it is declared at all, because the function definition is not hoisted. Whereas you will be able to use func2 before/above where it is declared because the function definition is hoisted.





// 14. What would be the output of following code?
var array = new Array('blue', 'green', 'red', 'orange', 'yellow');
array[10] = 'purple';
delete array[10];

// console.log(array.length);

// ANSWER
// When we used the delete operator on an array, it will delete the property but it will not update the length of the array or reindex the array. Therefore we are left with an array that has 5 full elements in it along with 6 empty elements.





// 15. What does the `instanceof` operator do?

// ANSWER
// The instanceof operator checks to see if a piece of data is of a specific type. For example, if we have the following code:

function Animal(name, location, color) {
  this.name = name;
  this.location = location;
  this.color = color;
}

const buster = new Animal('Buster', 'USA', 'brown');

// console.log(buster instanceof Animal); // true

// We would get the value true logged out to the console because our variable buster is of the type Animal and buster inherits from the Animal.prototype object.





// 16. What is logged out from the code below?
var greeting = {
  message: 'Hello World',
  getMessage: function () {
    (function() {
      console.log(this.message);
    })();
  }
};

// greeting.getMessage();

// ASNWER
// this.message is logged out as undefined. This happens because the this keyword has lost reference to the greeting object because it is inside of an IIFE.

// We can solve this by passing a reference to the IIFE:
var greet = {
  message: 'Hello World',
  getMessage: function () {
    var self = this;
    (function() {
      console.log(self.message);
    })();
  }
};

// greet.getMessage();





// 22. What is logged out to the console from the code below?
// (function() {
//   var y = 100;
//   function y() {};
//   console.log(y);
// })();

// ANSWER
// The value 100 is logged out because the function y is hoisted to the top of our IIFE, then y is reassigned to the value 100 after the hoisting takes place.





// 24. What is logged out from the code below?
(function(baz){
  return typeof baz.foo;
})({ baz: { foo: 500 } });

// undefined
// We are passing in the object { baz: { foo: 500 } } as the baz parameter to our function. The { baz: { foo: 500 } } does not have the property foo on it so we get undefined returned for typeof baz.foo. If we want to access the number value that is present on the object we would have to return typeof baz.baz.foo





// 25. What is logged out from the code below?
var courseId = '111111111';
var course = {
  courseId: '222222222',
  getCourseId: function() {
    return (function() {
      return this.courseId;
    })();
  }
};

console.log(course.getCourseId());

// ANSWER
// Because we are accessing the this keyword from inside of an IIFE, it loses reference to the course object. We need to pasa a reference to the object using a self vriable for instance
