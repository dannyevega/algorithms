/*
- have you used Single Page Applications before? Explain how they work. She then told me to go to amazon.com and enter ‘Hello Kitty’ into the search bar and asked me if their site was using a SPA
- can you explain quick sort
- can you explain what a closure is
- can you explain what an IIFE is and why would you use it
- if you were constructing a javascript typeahead search bar i.e. where, lets say your searching for city names and you enter “O” then the search bar would make suggestions for you like “Oakland” then you type “Ok” and it responds with “Oklahoma City”…what data structure would you use to make this?
- can you explain what a hash is
- what is a hash collision
- explain null vs undefined
*/

// what is this piece of code:
	(function () {
		/* code here */
	})();
	//IIFE

// what will this print?
	var f = function(x) {
		x++;
	};
	var x = 5;
	f(x);
	console.log(x);
	// 5 --> lexical vs. global scope

// what will the function invocation here print and why
var a = [{}, {}, {}];
for(var i=0; i<a.length; i++){
	a[i].f = function(){
		console.log(i);
	};
}
a[1].f();

// now how can we get it to print what we expect? i.e. a[0].f() --> 0, a[1].f() --> 1, a[2].f() --> 2
// below runs immediately
var a = [{}, {}, {}];
for(var i=0; i<a.length; i++){
	a[i].f = (function(){
		console.log(i);
	})();
}

// will run when you invoke each element in the array
var a = [{}, {}, {}];
for(var i=0; i<a.length; i++){
  a[i].f = (function(j){
    return function(){
      console.log(j);
    }
  }(i));
}

//
//Given x is an integer, like x = 7589653, write a piece of code to print out sum of its digits of x
function sum(x) {
    let count = 0;
    while(x > 0){
        count += parseInt(x % 10);
        x = parseInt(x / 10);
    }
    return count;
}