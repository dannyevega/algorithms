// Build a Image Gallery with HTML/CSS and JS
<html>
  <head>
    <style>
      body {
        background-color: #1d2126;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>Hello, World</h1>
  </body>
</html>





// Problem 1
(() => {
  console.log('this is the start');
  setTimeout(function cb() {
    console.log('this is a msg from call back');
  });
  console.log('this is just a message');
  setTimeout(function cb1() {
    console.log('this is a msg from call back1');
  }, 0);
  console.log('this is the end');
})();





// Problem 2
const bar = () => console.log('bar');
const baz = () => console.log('baz');

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0);
  new Promise((resolve, reject) =>
    resolve('Promise Resolved!')
  ).then(resolve => console.log(resolve));
  baz();
};
foo();





// Problem 3 - Make the following code work:
const a = [1, 2, 3, 4, 5];
// a.multiply();
// console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]

Array.prototype.multiply = function(){
  return this.concat(this.map(num => num * num));
}




// Write a function to check if the string of brackets are balanced
// [()]() yes
// [(] no
// [({})] yes
// [](){} yes
const balancedBracket = (str) => {
  const parantheses = '[](){}';
  let stack = [];

  if(str.length < 2){
    return false;
  }

  for(let i = 0; i < str.length; i++){
    let current = str[i];
    let bracketPosition = parantheses.indexOf(current);
    
    if(bracketPosition % 2 === 0){
      stack.push(bracketPosition + 1);      
    } else {
      if(stack.length === 0 || stack.pop() !== bracketPosition){
        return false;
      }
    }
  }  

  return stack.length === 0;
}
// balencedBrackets('[](){}');