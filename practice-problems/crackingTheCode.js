function product(a, b){
	var sum = 0;
	for(var i = 0; i < b; i++){
		sum += a;
	}
	return sum;
}

function power(a, b){
	if(b < 0){
		return 0; // error or something
	} else if(b === 0){
		return 1;
	} else {
		return a * power(a, b - 1);
	}
}

function div(a, b){
	var count = 0, sum = b;
	while(sum <= a){
		sum += b;
		count++
	}
	return count;
}

function findSquareRoot(n){
	function helper(num, min, max){
		if(max < min){
			return -1;
		} else {
			var guess = Math.floor((min + max) / 2);
			if(guess * guess === num){
				return guess;
			} else if(guess * guess < num){
				return helper(num, guess + 1, max);
			} else {
				return helper(num, min, guess - 1);
			}
		}
	}
	return helper(n, 1, n);
}

function findPairs(arr, diff){
	var map = {}, result = [];
	for(var i = 0; i < arr.length; i++){
		map[arr[i]] = i;
	}
	for(var i = 0; i < arr.length; i++){
		var num = arr[i] + diff;
		if(map[num]){
			result.push([arr[i], arr[map[num]]]);
		}
	}
	return result;
}
findPairs([1,7,5,9,2,12,3], 2);

function uniqueChars(str){
	let map = {};
	for(var i = 0; i < str.length; i++){
		if(map[str[i]]){
			return false;
		}
		map[str[i]] = i;
	}
	return true;
}
uniqueChars("hello") // should return false
uniqueChars("about") // should return true

function findAllPermutations(str){
	// result array
	let result = [];

	// this is our base case -- since were using recursion, it will always return one single letter to be concatanated to the rest -- this will continue until each level falls off the stack
	if(str.length === 1){
		result.push(str);
		return result;
	}

	// iterate through the length of the string
	for(let i = 0; i < str.length; i++){
		// hold the position of the first character
		let firstChar = str[i];
		// find the remaining characters
		let remainingChars= str.slice(0, i) + str.slice(i + 1);
		// recursively call the characters til it gets broken down to one character and can execute at each stack
		let innerPerms = findAllPermutations(remainingChars);
		// now, well have our first character and can concatanate with each other letter --> "a" + "bc", "a" + "cb"
		for(let j = 0; j < innerPerms.length; j++){
			result.push(firstChar + innerPerms[j]);
		}
	}
	// return the result
	return result;
}

// first call
str = "abc"
firstChar = "a"
remainingChars = "bc"
innerPerms = findAllPermutations("bc")
// second call
innerPerms = findAllPermutations("bc")
firstChar = "b"
remainingChars = "c"
innerPerms = findAllPermutations("c")
// third call
innerPerms = findAllPermutations("c") // --> return ["c"]
// back to second call
// pushes "bc" in inner for loop then goes to back to outer for loop
firstChar = "c"
remainingChars = "b"
innerPerms = findAllPermutations("b")
// fourth call
innerPerms = findAllPermutations("b") // --> returns ["b"]
// back to second call
// pushes "cb" in inner for loop then goes to back to outer for loop
// back to inner for loop in first call
"a" + "bc" --> "abc"
"a" + "cb" --> "acb"
// then moves to the next character "b" and does the same for each character

function findAllPermutations(str){
	let result = [];

	if(str.length === 1){
		result.push(str);
		return result;
	}

	for(let i = 0; i < str.length; i++){
		let firstChar = str[i];
		let remainingChars= str.slice(0, i) + str.slice(i + 1);
		let innerPerms = findAllPermutations(remainingChars);
		for(let j = 0; j < innerPerms.length; j++){
			result.push(firstChar + innerPerms[j]);
		}
	}
	return result;
}

// checks to see if second string is a permutation of the first
function permutationTwoStrings(str1, str2){
	let map = {}, result = findAllPermutations(str1);
	for(let i = 0; i < result.length; i++){
		map[result[i]] = i;
	}
	for(let key in map){
		if(str2 === key){
			return true;
		}
	}
	return false;
}

// given a string, turn it into a URL with "%20" in place of each space
// input: "Mr John Smith    "
// output: "Mr%20John%20Smith"
function URLify(str){
	let result = "", split, newChar;
	str = str.trim();
	split = str.split(" ");
	for(let i = 0; i < split.length; i++){
		newChar = split[i] + "%20";
		if(split[i] === split[split.length - 1]){
			newChar = split[i];
		}
		result += newChar;
	}
	return result;
}


// Time complexity: O(N^2)
function findSubArray(arr, target){
	for(let i = 0; i < arr.length; i++){
		let current = arr[i];
		for(let j = i + 1; j <= arr.length; j++){
			if(current === target){
				let idx = j - 1;
				return "Sum found between indices " + i + " and " + idx;
			}
			if(current > target){
				break;
			}
			current += arr[j];
		}
	}
	return "No subarray found";
}
arr = [20, 1, 4, 3, 10, 6], 5;

function findSubArray(arr, target){
	for(let i = 0; i < arr.length; i++){
		let currentSum = arr[i];
		for(let j = i + 1; j <= arr.length; j++){
			if(currentSum === target){
				return [i, j - 1];
			}
			if(currentSum > target){
				break;
			}
			currentSum += arr[j];
		}
	}
	return "No subarray found."
}

// Time complexity: O(N)
function findSubArray(arr, sum){
	let currentSum = 0, start = 0;
	for(let i = 0; i <= arr.length; i++){
		while(currentSum > sum){
			currentSum -= arr[start];
			start++;
		}
		if(currentSum === sum){
			return [start, i - 1];
		}
		if(i < arr.length){
			currentSum += arr[i];
		}
	}
	return "No subarray is found with sum equals to " + sum;
}
[3, 10, 6], 6
