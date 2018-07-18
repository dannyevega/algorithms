/*
Recipe for Recursion:
1. Identify base case(s)
2. Identify recursive case(s)
3. Write procedures for each case that brings you closer to the base case(s)

function recurse(){
	if(){
		// base case
		return;
	} else {
		//recursive case
		recurse();
	}
	return;
}
*/

function loopNTimes(n){
	console.log('n equals', n);
	if(n <= 1){
		return "complete";
	}
	return loopNTimes(n - 1);
}
loopNTimes(4);

function factorial(n){
	let result = 1;
	for(var i = 1; i <= n; i++){
		result *= i;
	}
	return result;
}

function factorial(n){
	if(n < 1){
		return 1;
	}
	return n * factorial(n - 1);
}

//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function printNumsInReverseLoop(num){
	while(num >= 0){
		console.log(num);
		num--;
	}
}

//2. Next, try looping just like above except using recursion
function printNumsInReverseRecursive(num){
	if(num < 0){
		return;
	} else {
		console.log(num);
		printNumsInReverse(num - 1);
	}
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, exp){
	let result = 1;
	while(exp > 0){
		result *= base;
		exp--;
	}
	return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentRecursive(base, exp){
	if(exp === 0){
		return 1;
	} else {
		return base * exponentRecursive(base, exp - 1);
	}
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num){
	let result = [];
	function helper(index){
		if(index === arr.length){
			return;
		} else {
			result[index] = arr[index] * 2;
			helper(index + 1);
		}
	}
	helper(0);
	return result;
}

function recursiveMultiplier(arr, num){
	if(arr.length === 0){
		return arr;
	}
	let elem = arr.pop();
	recursiveMultiplier(arr, num);
	arr.push(elem * 2);
	return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr){
	let result = [];
	function helper(index){
		if(index < 0){
			return;
		} else {
			result.push(arr[index])
			helper(index - 1);
		}
	}
	helper(arr.length - 1);
	return result;
}

function recursiveReverse(arr){
	if(arr.length === 0){
		return;
	}
	var element = arr.shift();
	recursiveReverse(arr);
	arr.push(element);
	return arr;
}

function recursiveReverse(arr){
	let result = [];
	function reverseItems(orderedArr){
		if(arr.length > 0){
			result.push(arr.pop());
			reverseItems(orderedArr);
		}
		return;
	}
	reverseItems(arr);
	return result;
}

/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/
function fibonacci(num){
	var fibonacci = [0,1];
	function helper(index){
		if(index > num){
			return;
		} else {
			fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
			helper(index + 1);
		}
	}
	helper(2);
	return fibonacci[n];
}

// using memoization with IIFE
var fibonacci = (function(){
	let memo = {};
	function helper(n){
		let value;
		if(n in memo){
			value = memo[n];
		} else {
			if(n === 0 || n === 1){
				value = n;
			} else {
				value = fibonacci(n - 2) + fibonacci(n - 1);
				memo[n] = value;
			}
		}
		return value;
	}
	return helper;
})();

var fibonacci = (function(){
	let memo = {
		0: 0,
		1: 1
	};
	function helper(n){
		let value;
		if(n in memo){
			value = memo[n];
		} else {
			value = fibonacci(n - 2) + fibonacci(n - 1);
			memo[n] = value;
		}
		return value;
	}
	return helper;
})();

// return all nums before passed in num
// input: 5
// output: [0,1,1,2,3]
function fibonacci(num){
	var fibonacci = [0,1];
	if(num === 0) { return []; }
	function helper(index){
		if(index > num){
			return;
		} else {
			fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
			helper(index + 1);
		}
	}
	helper(2);
	fibonacci.splice(fibonacci.length - 1);
	return fibonacci;
}

/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/
function flatten(arr){
	let result = [];
	function helper(currentObj){
		for(let i = 0; i < currentObj.length; i++){
			if(typeof currentObj[i] === "number"){
				result.push(currentObj[i]);
			} else {
				helper(currentObj[i]);
			}
		}
		return result;
	}
	return helper(arr);
}

/*
Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/
function reverseString(str){
	let result = "";
	function helper(index){
		if(index < 0){
			return;
		} else {
			result += str[index];
			helper(index - 1);
		}
	}
	helper(str.length - 1);
	return result;
}

/*
Write a function that takes a string and returns all permutations of the string. Ensure that there are no duplicates in the output.
*/
function permutations(str){
	let result = [];
	if(str.length === 1){
		result.push(str);
		return str;
	}
	for(let i = 0; i < str.length; i++){
		let current = str[i];
		let remainingChars = str.slice(0, i) + str.slice(i + 1);
		let innerPermutations = permutations(remainingChars);
		for(let j = 0; j < innerPermutations.length; j++){
			result.push(current + innerPermutations[j]);
		}
	}
	return result;
}







