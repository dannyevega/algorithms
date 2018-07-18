/* Write a function, longestCommonSubstr(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string. */

function longestCommonSubstr(str1, str2){
	// create empty string variable to hold the longest string
	var longestSubstr = "";
	// iterate through the first string
	for(var i = 0; i < str1.length; i++){
		// iterate through the second string
		for(var j = 0; j < str2.length; j++){
			// if the character at each strings first index matches, well continue looking for more matches
			if(str1[i] === str2[j]){
				// create new variable to hold all matching letters
				var current = str1[i];
				// create new var to keep track of count from original index value so we can keep incrementing and checking if the following characters are a consecutive match
				var count = 1;
				// continue cheking until the letters no longer match or we reach the end of the string length
				// count MUST be less than each strings length AND each consecutive character must match to be pushed into current variable
				while(i + count < str1.length && j + count < str2.length && str1[i + count] === str2[j + count]){
					current += str1[i + count];
					count++;
				}
				// when weve reached the end of the string or letters no longer match, check to see if the current string is longer than the longestSubstr --> if it is, set it to the current string
				if(current.length > longestSubstr.length){
					longestSubstr = current;
				}
			}
		}
	}
	// return string
	return longestSubstr;
}
longestCommonSubstr("abc", "ab"); // --> "ab"
longestCommonSubstr("xab", "ab"); // --> "ab"

// WITHOUT COMMNENTS TO READ EASIER
function longestCommonSubstr(str1, str2){
	var longestSubstr = "";
	for(var i = 0; i < str1.length; i++){
		for(var j = 0; j < str2.length; j++){
			if(str1[i] === str2[j]){
				var current = str1[i];
				var count = 1;
				while(i + count < str1.length && j + count < str2.length && str1[i + count] === str2[j + count]){
					current += str1[i + count];
					count++;
				}
				if(current.length > longestSubstr.length){
					longestSubstr = current;
				}
			}
		}
	}
	return longestSubstr;
}





/* Write a function called sumOfNums that takes an array of integers and returns their sum. Use recursion. */
function sumOfNums(array){
	var result = 0;
	for(var i = 0; i < array.length; i++){
		result += array[i];
	}
	return result;
}

function sumOfNums(array){
	var result = 0;
	function helper(idx){
		if(idx === array.length){
			return;
		} else {
			result += array[idx];
			helper(idx + 1);
		}
	}
	helper(0);
	return result;
}

function sumOfNums(array){
	var result = 0;
	function helper(idx){
		if(idx < 0){
			return;
		} else {
			result += array[idx];
			helper(idx - 1);
		}
	}
	helper(array.length - 1);
	return result;
}

function sumOfNums(array){
	if(array.length === 1){
		return array[0];
	}
	return array[0] + sumOfNums(array.slice(1, array.length));
}
sumOfNums([1,2,3]);
1 + sumOfNums([2, 3]);
1 + 2 + sumOfNums([3]);
1 + 2 + 3
1 + 5
6

function sumOfNums(array){
	if(array.length === 1){
		return array[0];
	}
	return array.pop() + sumOfNums(array);
}
sumOfNums([1,2,3]);
3 + sumOfNums([1, 2]);
3 + 2 + sumOfNums([1]);
3 + 2 + 1
3 + 3
6





/* Write a method called digitalRoot that takes in a number. It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method. */
input = 11
output = 2
input = 13
output = 4

// parseInt because it returns the number rounded down
// 13 % 10 = 3
// 13 / 10 = 1.3 --> use parseInt
// add these numbers together
// can check as long as num is greater than 0 and keep adding to your count
// OR recursively check base case if num < 10, return then add the result of modulo plus calling the function again with the new number
function digitalRoot(num){
	var count = 0;
	while(num > 0){
		count += parseInt(num % 10);
		num = parseInt(num / 10);
	}
	return count;
}

function digitalRoot(num){
	if(num < 10){
		return num;
	}
	return parseInt(num % 10) + digitalRoot(parseInt(num / 10));
}





/* Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.

Basically, pass in a value and return all of the elements up to but not including that value.

Sample Input:
fibs(5)

Sample Output:
[0,1,1,2,3] */
0,1,1,2,3,5,8,13
0 1 2 3 4 5 6 7

function fibs(num){
	var fibonacci = [0, 1];
	if(num === 0) return [];
	if(num === 1) return [0];

	while(fibonacci.length < num){
		fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
	}

	return fibonacci;
}

function fibs(num){
	var fibonacci = [0, 1];
	if(num === 0){
		return [];
	}
	function helper(idx){
		if(idx > num){
			return;
		} else {
			fibonacci[idx] = fibonacci[idx - 2] + fibonacci[idx - 1];
			helper(idx + 1);
		}
	}
	helper(2);
	fibonacci.splice(fibonacci.length - 1);
	return fibonacci;
}





/* Write a JavaScript function that takes a string and returns true if it's a palindrome, false if it's not.

Sample Input:
isPalindrome("racecar");
isPalindrome("desire")

Sample Output:
true
false */
function isPalindrome(string){
	var splitStr = string.split(""), reverse = "";
	for(var i = splitStr.length - 1; i >= 0; i--){
		reverse += splitStr[i];
	}
	return (reverse === string) ? true : false;
}

function isPalindrome(str){
	var result = "";
	function helper(index){
		if(index < 0){
			return;
		} else {
			result += str[index];
			helper(index - 1);
		}
	}
	helper(str.length - 1);
	return (result === str) ? true : false;
}

function isPalindrome(str){
	function helper(firstIdx, lastIdx, string){
		if(lastIdx <= firstIdx){
			return (string.join("") === str) ? true : false;
		} else {
			swap(firstIdx, lastIdx, string);
			return helper(firstIdx + 1, lastIdx - 1, string);
		}
	}

	function swap(a, b, string){
		var temp = string[a];
		string[a] = string[b];
		string[b] = temp;
	}
	return helper(0, str.length - 1, str.split(""));
}
isPalindrome("racecar")

function isPalindrome(str){
	function helper(firstIdx, lastIdx, string){
		if(lastIdx < firstIdx){
			return true;
		} else {
			if(string[firstIdx] === string[lastIdx]){
				return helper(firstIdx + 1, lastIdx - 1, string);
			} else {
				return false;
			}
		}
	}
	return helper(0, str.length - 1, str.split(""));
}






/* Write a method that finds all the unique substrings for a word.

Sample input:
"aab"

Sample output:
["a", "aa", "aab", "ab", "b"] */
function uniqueSubs(str){
	// create empty array result to store all substrings of the string passed in
	// create empty uniqueSubs array to store all unique substrings as there will likely be duplicates
	// empty map to store unique properties
	var result = [], uniqueSubs = [], map = {};
	// iterate through the string starting at index 0 for the outer loop and add 1 to the index in the inner loop
	// this is so you'll be able to slice the string from the index and 1 over each time i.e. "a" --> "aa" --> "aab" & so on
	for(var i = 0; i < str.length; i++){
		for(var j = i + 1; j <= str.length; j++){
			result.push(str.slice(i, j));
		}
	}
	// now we have all the substrings in the results array but they are not unique ["a", "aa", "aab", "a", "ab", "b"]
	// since we have duplicates, we set each substring as a key with the value of true (value is arbitrary, just need a place holder) because pushing to a map will not push duplicates therefore we know each key in the map is unique
	for(var i = 0; i < result.length; i++){
		map[result[i]] = true;
	}
	// iterate through the map and push each key into the uniqueSubs array
	for(var k in map){
		uniqueSubs.push(k);
	}
	// return uniqueSubs array
	return uniqueSubs;
}
uniqueSubs("aab");

/* without comments */
function uniqueSubs(str){
	var result = [], uniqueSubs = [], map = {};
	for(var i = 0; i < str.length; i++){
		for(var j = i + 1; j <= str.length; j++){
			result.push(str.slice(i, j));
		}
	}
	for(var i = 0; i < result.length; i++){
		map[result[i]] = true;
	}
	for(var k in map){
		uniqueSubs.push(k);
	}
	return uniqueSubs;
}
uniqueSubs("aab");

// since "a" is not unique, thats why we pass the character into the map so it will store the character as a key with its value -- pushing duplicates into a map will not store it twice so we know each key is unique
i = 0
j = 1 "a"

i = 0
j = 2 "aa"

i = 0
j = 3 "aab"

i = 1
j = 2 "a"

i = 1
j = 3 "ab"

i = 2
j = 3 "b"





/* If a word starts with a vowel ('a', 'e', 'i', 'o', 'u', or 'y'), just append "way" to the end of the word.

If a word starts with a consonant (a letter that's not a vowel), move all consonants leading up to the first vowel to the end of the word and add an "ay" at the very end

Given a word, translate it into Pig Latin.

Sample input:
"lit"
"apple"

Sample output:
"itlay"
"appleway" */
function pigLatin(word){
	var result = "";
	// regex to check for vowels
	var regex = /[aeiouy]/gi;
	// check if first letter in word is vowel -- if it is, return word as is and add 'way' at end
	if(word[0].match(regex)){
		result = word + "way";
	} else {
		// match returns an array with all of the matches found using the regex passed in
		// we pass [0] to get the first vowel in the array
		// then pass that vowel into the indexOf function to find where it is located in the string -- save as firstVowel variable
		var firstVowel = word.indexOf(word.match(regex)[0]);
		// use substr to cut the string from the first vowel to end of the strings length
		// add all the consonants before the firstVowel using substr from 0 index up until the firstVowel
		// add 'ay' at the end
		result = word.substr(firstVowel) + word.substr(0, firstVowel) + "ay";
	}
	// return the result
	return result;
}





/* add all values in a given rectangle in a matrix passed by the coordinates left and right
only adds elements if they are its the entire inner array -- cant pass other coordinates to get rectangles skipping any elements
you wouldnt be able to do left = [1,0], right = [2,1] to get 8


input:
left = [1,0]
right = [2,2]
0 1 2
2 1 3
2 3 1

output:
12
2 + 1 + 3 + 2 + 3 + 1 = 12 */
function matrixSum(matrix, left, right){
	// empty sum variable to keep count
	var sum = 0;
	// x coords in left and right coordinates tell you how much to loop i.e. left = [1,1] right = [2,2] -- > 0 and 2 is range to loop thru
	for(var i = left[0]; i <= right[0]; i++){
		// you're always in the array you want to check because i = left[0] === 1 --> matrix[1] === [2,1,3]
		// inner loop tells you what index to start counting from within inner array
		// make sure to set j = 0 + left[1] which whill tell you the position to start from i.e. matrix[i][j] === matrix[1][1] --> 1
		// since we have the position, we know where to start and add thru the length of the array
		for(var j = 0 + left[1]; j < matrix[i].length; j++){
			sum += matrix[i][j];
		}
	}
	// return sum
	return sum;
}
matrixSum([[0,1,2], [2,1,3], [2,3,1]], [1,1], [2,2]);





/* add all diagonal values in a given matrix

input:
left = [0,0]
right = [2,2]
3 1 2
2 2 3
2 3 1

output:
6
3 + 2 + 1 = 12 */
function diagonalMatrix(matrix, left, right){
	// empty sum variable to keep count
	var sum = 0;
	// x coords in left and right coordinates tell you how much to loop i.e. left = [0,0] right = [2,2] -- > 0 and 2 is range to loop thru
	for(var i = left[0]; i <= right[0]; i++){
		// i holds the position of the array and index you want to grab
		// matrix[0][0] --> 5
		// matrix[1][1] --> 4
		// matrix[2][2] --> 3
		sum += matrix[i][i];
	}
	// return the sum
	return sum;
}
diagonalMatrix([[5,1,2], [2,4,3], [2,5,3]], [1,1], [2,2]);





/* this matrix will return sum of all values for any indices you pass in

input: [1,2], [2,3]
[0,1,2,1]
[2,2,1,3]
[2,4,3,1]

output:
8
1 + 3 + 3 + 1 = 8 */
function anyMatrixSum(matrix, left, right){
	var sum = 0;
	for(var i = left[0]; i <= right[0]; i++){
		for(var j = 0 + left[1]; j <= right[1]; j++){
			sum += matrix[i][j];
		}
	}
	return sum;
}

function caesarCipher(string, shift){
	// empty variable to hold result
	var result = "";
	// put all letters of alphabet into array to check the indices of the string passed in
	var letters = "abcdefghijklmnopqrstuvwxyz".split("");

	// iterate through the length of the string
	for(var i = 0; i < string.length; i++){
		// get each current letter in the string
		var char = string[i];
		// check if current element is a space -- push to result if it is
		if(char === " "){
			result += " ";
		} else {
			// its not an empty space -- get index of each character i.e. "d" --> 3
			var index = letters.indexOf(char);
			// create new letter to push in -- old index + amount to shift over i.e. letters[3 + 2] === letters[5] --> "f"
			// we modulo by amount of letters in alphabet, 26 to account for letters at end of alphabet i.e. "y" shift over 2 should be "a"
			// without modulo, would return undefined because letters[24 + 2] === letters[26] which does not exist
			var newLetter = letters[(index + shift) % 26];
			// push newLetter to result
			result += newLetter;
		}
	}
	// return result
	return result;
}

function caesarCipher(str, shift){
	var letters = "abcdefghijklmnopqrstuvwxyz", result = "";
	for(var i = 0; i < str.length; i++){
		if(str[i] === " "){
			result += str[i];
		} else {
			var currentIndex = letters.indexOf(str[i]);
			var shiftOver = (currentIndex + shift) % 26;
			result += letters[shiftOver];
		}
	}
	return result;
}




function validIP(string){
	var periods = 0, split, isValid;
	for(var i = 0; i < string.length; i++){
		if(string[i] === "."){
			periods += 1;
		}
	}
	if(!periods === 3){
		return false;
	} else {
		split = string.split(".");
		split = split.map(function(el){
			return parseInt(el);
		});
		isValid = split.filter(function(num){
			return num >= 0 && num <= 255;
		});
		return (isValid.length === 4) ? true : false;
	}
}





/* merge two sorted arrays into one sorted array

input: [1, 5, 7], [2, 3, 6]
output: [1,2,3,5,7]; */
function mergeSortedArrays(array1, array2){
	var result = [];
	function helper(firstIndex, secondIndex){
		// base case -- if BOTH indices are bigger than the length of its array, we know to return
		if(firstIndex > array1.length && secondIndex > array2.length){
			return result;
		} else {
			// check to see if both elements exist
			if(array1[firstIndex] && array2[secondIndex]){
				// if element in first array is less than element in second array at same position, push into result -- increment firstIndex and call helper function again
				if(array1[firstIndex] < array2[secondIndex]){
					result.push(array1[firstIndex]);
					firstIndex++;
					return helper(firstIndex, secondIndex);
				} else {
					// else the element in second array in same position is bigger, push into result
					result.push(array2[secondIndex]);
					secondIndex++;
					return helper(firstIndex, secondIndex);
				}
			}
			// at end, were not going to have two elements to compare because only 1 element will be left over
			// 1 & 2 --> push in 1
			// 5 & 2 --> push in 2
			// 5 & 3 --> push in 3
			// 5 & 6 --> push in 5
			// 7 & 6 --> push in 6
			// only one element, 7, is left over in array1 so we add all elements from that index over to the result array
			if(array1[firstIndex]){
				return result.concat(array1.splice(firstIndex));
			}
			if(array2[secondIndex]){
				return result.concat(array2.splice(secondIndex));
			}
		}
	}
	return helper(0, 0);
}
mergeTwoArrays([1, 5, 7], [2, 3, 6]);

function mergeSortedArrays(arr1, arr2){
	// create variables -- first to keep track of index in first array, second to keep track of index in second array & result to hold new array
	var first = 0, second = 0, result = [];
	// iterate while these conditions are met
	// first condition -- checks to see if both counters are less than their respective array length
	// second condition -- what if there are no more elements in 2nd array? as long as first is < arr1.length, we continue
	// third condition -- what if there are no more elements in 1st array? as long as second is < arr2.length, we continue
	while((first < arr1.length && second < arr2.length) || first < arr1.length || second < arr2.length){
		// in the case there are no more elements in the second array, we continue to push because there are no longer two arrays to compare
		if(second >= arr2.length || arr1[first] < arr2[second]){
			result.push(arr1[first]);
			first++;
		} else {
			result.push(arr2[second]);
			second++;
		}
	}
	return result;
}
mergeSortedArrays([1,3,5,7], [2,4]);

function mergeSortedArrays(arr1, arr2){
	var result = [], first = 0, second = 0;
	while(first < arr1.length || second < arr2.length){
		if(arr1[first] < arr2[second] || second >= arr2.length){
			result.push(arr1[first]);
			first++;
		} else {
			result.push(arr2[second]);
			second++;
		}
	}
	return result;
}

function merge(leftArr, rightArr){
	var result = []; left = 0, right = 0;
	while(left < leftArr.length && right < rightArr.length){
		if(leftArr[left] < rightArr[right]){
			result.push(leftArr[left]);
			left++;
		} else {
			result.push(rightArr[right]);
			right++;
		}
	}
	return result.concat(leftArr.slice(left).concat(rightArr.slice(right)));
}





/* given an array of numbers, return the indices where the values add up to the target
return -1 if there is no match

input: array = [4,2,6,5,9,10], target = 13
output: [0, 4];

input: array = [4,2,9,10], target = 23
output: -1 */

// NAIVE SOLUTIONS
// This solution uses the brute force approach -- it tries every single possible pair combination to see if sum === target
// This would be O(n^2) time complexity
function twoSum(array, target){
	for(var i = 0; i < array.length; i++){
		for(var j = i + 1; j < array.length; j++){
			if(array[i] + array[j] === target){
				return [i, j]
			}
		}
	}
	return -1
}
twoSum([4,2,9,10], 11);

// Use 2 for loops although we dont need 2 for loops...just makes more sense to break into 2 loops for clarity of the problem
// O(n) using a frequency hash
function twoSum(array, target){
	var map = {}, current;
	for(var i = 0; i < array.length; i++){
		if(!map[array[i]]){
			map[array[i]] = i;
		}
	}
	for(var i = 0; i < array.length; i++){
		if(map[target - array[i]]){
			return [ i, map[target - array[i]] ];
		}
	}
	return -1;
}

// We use a hash here to check if the difference was ever found then return those indices
// O(n) using a frequency hash
function twoSum(array, target){
	var map = {}, current;
	for(var i = 0; i < array.length; i++){
		current = array[i];
		// set all elements in the array as a key in a map set to its index -- > map = {2: 1, 4: 0, 9: 2, 10: 3}
		if(!map[current]){
			map[current] = i;
		}
		// we check for 'map[target - current] === 0' because if that difference is found in the map and its value is 0, we need to check for that because map[4] = 0 --> if(0) is falsy so it wont evaluate
		if(map[target - current] || map[target - current] === 0){
			return [map[target - current], i];
		}
	}
	return -1;
}
twoSum([4,2,9,10], 11);





/* given an array of bits, return them in order
input: [0, 1, 1, 0, 1, 1, 1, 0]
output: [0, 0, 0, 1, 1, 1, 1, 1] */
// Naive solution -- creating more space and concatanating two arrays
function sortBits(array){
	var zeros = [], ones = [];
	for(var i = 0; i < array.length; i++){
		if(array[i] === 0){
			zeros.push(array[i]);
		} else if(array[i] === 1){
			ones.push(array[i]);
		}
	}
	return zeros.concat(ones);
}

// using the swap function below, this will run in O(n) time because we are swapping in place
/*
1. Set two pointers, one at left and one at right -- left is equal to 0 and right is equal to index at end of array
2. We set two pointers so we can iterate inward -- avoid using for loops when we set two pointers
3. Loop while left is less than right
4. Since we know we want 0's on the left and 1's on the right, we can loop from the left point to check while the current element is a 0 and continue incrementing -- when we reach a 1, we know its time to swap
5. Also loop from the end of the array inward to check if each element is a 1 and continue decrementing the right count -- when we reach a 0, we know its time to swap
6. Check if the current left count is less than the current right count and swap -- if less is ever greater than right, weve already crossed paths and the bits should be sorted
*/
function swap(arr, a, b){
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
function sortBits(arr){
	let left = 0, right = arr.length - 1;
	while(left < right){
		while(arr[left] === 0){
			left++;
		}
		while(arr[right] === 1){
			right--;
		}
		if(left < right){
			swap(arr, left, right);
		}
	}
	return arr;
}
[0, 1, 1, 0, 1, 1, 1, 0]




// BUBBBLE SORT
function bubbleSort(array){
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array.length - 1; j++){
			if(array[j] > array[j + 1]){
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}





/* You have array of integers nums and you need to return a new counts array. In the new counts array, counts[i] is the number of smaller elements to the right of nums[i].

For nums = [3, 8, 4, 1], the output should be
countSmallerToTheRight(nums) = [1, 2, 1, 0]. */
function countSmallerToTheRight(nums){
	var result = [], count;
	for(var i = 0; i < nums.length; i++){
		count = 0;
		for(var j = i + 1; j < nums.length; j++){
			if(nums[i] > nums[j]){
				count++;
			}
		}
		result.push(count);
	}
	return result;
}
input = [3, 8, 4, 1]
output = [1, 2, 1, 0]





/* Given an array, move all zeros to the end. The order of non-zero elements does not matter
input = [1,0,0,4,5,0,9]
output = [1,4,5,9,0,0,0] */
function moveZeros(array){
	var zeroCounter = array.length - 1;
	for(var i = 0; i < array.length && i < zeroCounter; i++){
		while(array[zeroCounter] === 0){
			zeroCounter--;
		}
		if(array[i] === 0){
			swap(i, zeroCounter, array);
		}
	}

	function swap(a, b, arr){
		var temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
	return array;
}
input = [1,0,0,4,5,0,9]
output = [1,4,5,9,0,0,0]

function swap(a, b, arr) {
    console.log(`  swapping ${a} for ${b} in ${arr}`);
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log(`    > ${arr}`);
}
function moveZeros(array) {
    var zeroCounter = array.length - 1;
    for (var i = 0; i < array.length && i < zeroCounter; i++) {
        while (array[zeroCounter] === 0) {
          zeroCounter--;
          console.log("zeroCounter: " + zeroCounter);
        }
        if (array[i] === 0) {
          swap(i, zeroCounter, array);
        }
        console.log("incrementing i to " + i);
    }
    return array;
}





/* Find the missing number. Assume an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

input = [1, 3, 9, 12, 5], [1, 3, 12, 5]
output = 9 */
function findMissingNumber(arr1, arr2){
	var sum1 = 0, sum2 = 0;
	for(var i = 0; i < arr1.length; i++){
		sum1 += arr1[i];
	}
	for(var i = 0; i < arr2.length; i++){
		sum2 += arr2[i];
	}
	return sum1 - sum2;
}





/* Upper case a string recursively */
function upcaseRecursive(str){
	var result = "";
	function helper(index){
		if(index === str.length){
			return;
        } else {
			result += str[index].toUpperCase();
			helper(index + 1);
        }
    }
	helper(0);
	return result;
}





function reverseStringRecursive(str){
	var result = "";
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
reverseStringRecursive("we out here");





// 2e. Flatten a nested array using the Helper Method of Recursion
// Input: Array of integers and arrays
// Output: Array of integers
// Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
function flatten(array){
    var result = [];
    function helper(currentObj){
        for(var i = 0; i < currentObj.length; i++){
            if(typeof currentObj[i] === "number"){
                result.push(currentObj[i]);
            } else {
                helper(currentObj[i]);
            }
        }
        return result;
    }
    return helper(array);
}
flatten([1, [2, 3, [4]], 5, [[6]]]);





/* Turn decimal number into binary number...decimals to binary
input: 5
output: 101 */
function numToBinary(num){
	var binary = [], remainder, formatted;
	while(num >= 1){
		remainder = num % 2;
		binary.push(remainder);
		num = Math.floor(num / 2);
	}
	formatted = binary.reverse().join("");
	return Number(formatted);
}




/* BINARY SEARCH
1. Start with the full range of the array (0 to array length - 1).
2. Check the value at the middle of that range.
2. If mid matches target we return the mid index.
3. If the mid is larger than target we can eliminate the right half.
4. If the mid is less than target, we can eliminate the left half.
5. Adjust the range depending on which half if still active.
6. Repeat steps 2-5 until a match is found or the range is empty
7. If the range is empty, return -1 */
function binarySearch(arr, target){
	let start = 0, end = arr.length - 1, mid;
	while(start <= end){
		mid = Math.floor((start + end) / 2);
		if(arr[mid] === target){
			return mid;
		}
		if(target < arr[mid]){
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

// use of helper function here to make binary recursive
function binarySearch(arr, target){
	let middle;
	function helper(start, end){
		if(start > end){
			return - 1;
		} else {
			middle = Math.floor((start + end) / 2);
			if(target === arr[middle]){
				return middle;
			} else if(target < arr[middle]){
				return helper(start, middle - 1);
			} else {
				return helper(middle + 1, end);
			}
		}
	}
	return helper(0, arr.length - 1);
}
binarySearch([1,2,5,6,24,33,40,55,99], 55);





/* camelCase is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given a string S, print the number of words in S

input: saveChangesInTheEditor
output: 5 */
// 1. Split the word into an array of characters
// 2. Iterate and find all the uppercase letters -- if uppercase, increment count since each uppercase letter is beginning of enw word
// 3. At end of iteration, count will be 4 then add 1 because of the first word
function camelCase(str){
	let letters = str.split(""), count = 1;
	for(let i = 0; i < letters.length; i++){
		if(letters[i] === letters[i].toUpperCase()){
			count++;
		}
	}
	return count;
}





// str = "beabeefeab";
// map to hold unique letters found in string
// map = {b: true, e: true, a: true, f: true};
// iterate through the map to get access to each characters
// we push in each letter at a time
// inner for loop doesnt execute until weve populated letters array with characters
// initially, lettes will be empty but after each for loop in object, a new letter will be added allowing us to find the combinations in letters
function tString(str){
	let map = {};
	for(let i = 0; i < str.length; i++){
		map[str[i]] = true;
	}
	let letters = [], charCombos = [];
	for(let char in map){
		for(let j = 0; j < letters.length; j++){
			charCombos.push(char + letters[j]);
		}
		letters.push(char);
	}
	let longestLength = 0;
	for(let k = 0; k < charCombos.length; k++){
		let regex = new RegExp('[^' + charCombos[k] + ']', 'g');
		let newStr = str.replace(regex, "");
		let valid = true;
		for(let l = 0; l < newStr.length; l++){
			if(newStr[l] === newStr[l + 1]){
				valid = false;
			}
		}
		if(valid === true){
			if(newStr.length > longestLength){
				longestLength = newStr.length;
			}
		}
	}
	return longestLength;
}





/*
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the minimum starting gas station’s index if you can travel around the circuit once, otherwise return -1
*/
function gasStation(gas, cost){
	for(let i = 0; i < gas.length; i++){
		let result = canComplete(gas, cost, i);
		if(result[1]){
			return i;
		}
	}

	function canComplete(gas, cost, index){
		let currentGas = 0, diff;
		for(let j = 0; j < gas.length; j++){
			diff = gas[(index + j) % gas.length] - cost[(index + j) % cost.length];
			currentGas += diff;
			if(currentGas < 0){
				return [index + j, false];
			}
		}
		return [index, true];
	}
	return -1;
}
gas = [3,5,15]
cost = [5,6,4]





/* Find all of the prime factors that make up the passed in number
input: 18
output: [2,3,3]
reason: 2 * 3 * 3 = 18

1. we start at i = 2 because primes are natural numbers greater than 1 that has no positive divisors other than 1 and itself
2. 2 is a prime number so we start from there -- if num % i === 0, we know its a prime factor
3. If not, then we increment i to check if its modulus is 0
4. Push in i if its a prime factor
5. then set num = num / i -- continue until loop breaks */
function findPrimeFactors(num){
	let result = [], i = 2;
	while(i <= num){
		if(num % i === 0){
			result.push(i);
			num = Math.floor(num / i);
		} else {
			i++;
		}
	}
	return result;
}

function isPrime(num){
	for(var i = 2; i * i <= num; i++){
		if(num % i === 0){
			return false;
		}
	}
	return true;
}





// Write a method that takes an array and returns its duplicate values. Use less than O(n^2) time.
// input: arr = [1,2,2,4,5,5,6,7,6];
// output: [2,5,6]
/*
1. Iterate through the array
2. Check if each element in the array is found in the map -- at each initial element check, the element does not exist -- this is the else portion of the conditional
3. When a duplicate in the array comes up in the iteration, the key will be found in the map so we know it's a duplicate -- we then push the element in the result array
4. Return the result with all duplicates */
function returnDuplicates(arr){
	let result = [], map = {};
	for(let i = 0; i < arr.length; i++){
		if(map[arr[i]]){
			result.push(arr[i]);
		} else {
			map[arr[i]] = i;
		}
	}
	return result;
}
arr = [1,2,2,4,5,5,6,7,6];




// Implement a Queue using Stacks. You're only allowed to use the push and pop methods
function Queue(){
	this.queue = [];
	this.temp = [];
}
Queue.prototype.enqueue = function(el){
	this.queue.push(el);
}
Queue.prototype.dequeue = function(){
	// only run when the temp array of Queue is empty
	if(this.temp.length === 0){
		// move all elements from queue array to temp array
		while(this.queue.length > 0){
			this.temp.push(this.queue.pop());
		}
		// pop off last element in temp array -- this is first element in queue array
		this.temp.pop();
		// push remaining elements back into queue -- first element will be removed
		while(this.temp.length > 0){
			this.queue.push(this.temp.pop());
		}
	}
}





// Finding the greatest common divisor -- this solution doesnt work for all cases, it's shitty af
function greatestCommonDivider(firstNum, secondNum){
	let firstResult = [], secondResult = [], i = 2, firstMap = {}, secondMap = {}, gcd;
	while(i <= firstNum){
		if((firstNum % i) === 0){
			firstResult.push(i);
			firstNum = Math.floor(firstNum / i);
		} else {
			i++;
		}
	}
	i = 2;
	while(i <= secondNum){
		if((secondNum % i) === 0){
			secondResult.push(i);
			secondNum = Math.floor(secondNum / i);
		} else {
			i++;
		}
	}
	for(let i = 0; i < firstResult.length; i++){
		firstMap[firstResult[i]] = i++;
	}
	for(let i = 0; i < secondResult.length; i++){
		secondMap[secondResult[i]] = i++;
	}
	gcd = common.reduce(function(a, b){
		return a * b;
	});
	return gcd;
}

/* Euclids Algorithm - Decrease and Conquer
1. this algorithm uses a conquer to converge the Greatest Common Divisor faster than the prime factorization
2. The basis -- the GCD of two numbers must be a factor of its difference as well
3. Instead of finding all the divisors of prime factors of two really large values, find the difference between them to reduce the problem to smaller inputs
4. If you keep finding the difference, the problem reduces to the point where the inputs are much smallers
*/
function euclidsGCD(first, second){
	// if our inputs are negative, convert them to positive
	if(first < 0) { first *= -1; }
	if(second < 0) { second *= -1; }
	// use modulo here to reduce the larger value until second number is zero
	while(second !== 0){
		let temp = second;
		second = first % second;
		first = temp;
	}
	// return the non-zero number
	return first;
}
/* The Euclidean Algorithm for finding GCD(A,B) is as follows:
If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.
If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.

Example: euclidsGCD(78, 52)

A=78, B=52
A !== 0 and b !== 0
Use modulo to find 78 % 52 = 26
find euclidsGCD(52, 26) since euclidsGCD(78, 52)=euclidsGCD(52, 26)

A=52, B=26
A !== 0 and b !== 0
Use modulo to find 52 % 26 = 0
find euclidsGCD(26, 0) since euclidsGCD(52, 26)=euclidsGCD(26, 0)

A=26, B=0
A !== 0, B= 0
euclidsGCD(26, 0)=26

euclidsGCD(78, 52) = euclidsGCD(52, 26) = euclidsGCD(26, 0) = 26
euclidsGCD(78, 52) = 26
*/





/* Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

STEPS:
1. Split string digit into array of two strings i.e. "23" --> ["2", "3"]
2. Create variables you'll be using: map for values, nums array to hold converted stings into digits, result and letter values of each digit
3. Once you have nums array [2, 3], iterate through map and push values of each of those digits into the valeus array
4. Values will now hold the letter valeus of each digit --> ["abc", "def"]
5. Nested for loop allows us to find all combinations of letters
6. Return result
*/
function telephone(str){
	str = str.split("");
	let values = [], result = [], map = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz"
	}, nums = str.map(function(el){
		return Number(el);
	});
	for(let i = 0; i < nums.length; i++){
		if(map[nums[i]]){
			values.push(map[nums[i]]);
		}
	}
	let first = values[0], second = values[1];
	for(let i = 0; i < first.length; i++){
		for(let j = 0; j < second.length; j++){
			result.push(first[i] + second[j]);
		}
	}
	return result;
}





/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product. */
function adjacentElementsProduct(inputArray) {
    let highest = inputArray[0] * inputArray[1], temp;
    for(let i = 0; i < inputArray.length - 1; i++){
        let j = i + 1;
        temp = inputArray[i] * inputArray[j];
        if(temp > highest){
            highest = temp;
        }
    }
    return highest;
}




//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
function shapeArea(n) {
    let area = 1;
    while(n > 1){
        area += ((n - 1) * 4);
        n--;
    }
    return area;
}





// Find the difference between two arrays -- Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

// Example:
// first = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]
// second = ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// should return "pink wool"
function diffArray(arr1, arr2){
	var newArr = [];

	function checkDiff(first, second){
		for(var i = 0; i < first.length; i++){
			if(second.indexOf(first[i]) === -1){
				newArr.push(first[i]);
			}
		}
	}

	checkDiff(arr1, arr2);
	checkDiff(arr2, arr1);

	return newArr;
}





/* Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).

Examples:
> lcs([5, 3, -7, 6]) // = 8 (5+3)
> lcs([1,2,3,4,5]) // = 15 (1+2+3+4+5)
> lcs([1,-1,1,-1,1]) // = 1 (either 1 or 3 or 5 first elements)
> lcs([-1, -2, -3, -4, -5]) // = -1

*/
function largestContinguousSubsum(arr){
	var largest = arr[0] || 0;
	for(var i = 0; i < arr.length; i++){
		var current = arr[i];
		for(var j = i + 1; j <= arr.length; j++){
			current += arr[j];
			if(current > largest){
				largest = current;
			}
		}
	}
	return largest;
}

function largestContinguousSubsum(arr){
	var current = 0;
	var largestSum = arr[0] || 0;
	for(var i = 0; i < arr.length; i++){
		current += arr[i];
		if(current > largestSum){
			largestSum = current;
		}
		if(current < 0){
			current = 0;
		}
	}
	return largestSum;
}





/* productify -- Given an array of numbers, return array of products of all other numbers (no division)

input: [1,2,3]
output: [6,3,2]

*/

function productify(arr){
	var productsBelow = [], productsAbove = [], result = [], pb = 1, pa = 1;
	for(var i = 0; i < arr.length; i++){
		productsBelow[i] = pb;
		pb *= arr[i];
	}
	for(var i = arr.length - 1; i >= 0; i--){
		productsAbove[i]= pa;
		pa *= arr[i];
	}
	for(var i = 0; i < arr.length; i++){
		result[i] = productsBelow[i] * productsAbove[i];
	}
	return result;
}












function twoSum(nums, target){
	let map = {};
	for(let i = 0; i < nums.length; i++){
		let elem = target - nums[i];
		if(map[elem] === undefined){
			map[nums[i]] = i;
			continue;
		}
		return [map[elem], i];
	}
}
[2,11,7,15], 9



function twoSum(arr, target){
	let map = {};
	for(let i = 0; i < arr.length; i++){
		let current = arr[i];
		let difference = target - current;
		if(map[difference] === undefined){
			map[arr[i]] = i;
			continue;
		}
		return [map[difference], i];
	}
}
[2,11,7,15], 9




function twoSum(arr, target){
	let map = {}, difference, current;
	for(let i = 0; i < arr.length; i++){
		current = arr[i], difference = target - current;
		if(map[difference] === undefined){
			map[current] = i;
			continue;
		}
		return [map[difference], i];
	}
}


// fibonacci using memoization
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



// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// For s = "abacabad", the output should be -- firstNotRepeatingCharacter(s) = 'c'
// For s = "abacabaabacaba", the output should be -- firstNotRepeatingCharacter(s) = '_'
function firstNotRepeatingCharacter(str){
	var map = {};
	for(let i = 0; i < str.length; i++){
		if(map[str[i]]){
			map[str[i]]++;
		} else {
			map[str[i]] = 1;
		}
	}
	for(let key in map){
		if(map[key] === 1){
			return key;
		}
	}
	return '_';
}

function firstNotRepeatingCharacter(str){
	var map = {};
	for(let i = 0; i < str.length; i++){
		if(map[str[i]]){
			map[str[i]]++;
		} else {
			map[str[i]] = 1;
		}
	}
	for(var j = 0; j < str.length; j++){
		if(map[str[j]] === 1){
			return str.charAt(j);
		}
	}
	return '_';
}



// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1

// For a = [2, 3, 3, 1, 5, 2], the output should be -- firstDuplicate(a) = 3
// For a = [2, 4, 3, 5, 1], the output should be -- firstDuplicate(a) = -1
function firstDuplicate(arr){
	var map = {};
	for(var i = 0; i < arr.length; i++){
		if(map[arr[i]] === undefined){
			map[arr[i]] = i;
		} else {
			return arr[i];
		}
	}
	return -1;
}
a = [2, 3, 3, 1, 5, 2]



// Extract the middle character(s) of each string. If the string is even in length, return the two middle characters. If its odd in length, just return the middle character

// For s = "testing" output --> "t"
// For s = "test" output --> "es"
// For s = "middle" output --> "dd"
// For s = "A" output --> "A"
function getMiddle(str){
	if(str.length % 2 === 0){
		let even = str.length / 2;
		return str.slice(even - 1, even + 1);
	}
	return str.charAt(str.length / 2);
}



// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
/*a =
	 [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

rotateImage(a) =
     [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]*/

function rotateImage(arr){
	var result = [];
	for(var i = arr.length - 1, outter = 0; i >= 0; i--, outter++){
		result[outter] = [];
		for(var j = 0, inner = arr.length - 1; j < arr.length; j++, inner--){
			result[outter][j] = arr[inner][outter];
		}
	}
	return result;
}
i = 2, o = 0
j = 0, i = 2



// Now, do it counter clockwise
/*rotateImageCounter(a) =
    [[3, 6, 9],
     [2, 5, 8],
     [1, 4, 7]]*/

function rotateImageCounter(arr){
	var result = [];
	for(var i = 0, outter = arr.length - 1; i < arr.length; i++, outter--){
		result[i] = []
		for(var j = 0; j < arr.length; j++){
			result[i][j] = arr[j][outter];
		}
	}
	return result;
}



function binarySearch(list, item){
	let middle;
	function helper(start, end){
		if(start > end){
			return -1;
		} else {
			middle = Math.floor((start + end) / 2);
			if(item === list[middle]){
				return middle;
			} else if (item < list[middle]){
				return helper(start, middle - 1);
			} else {
				return helper(middle + 1, end);
			}
		}
	}
	return helper(0, list.length - 1);
}



function isPal(word){
	function helper(firstIndex, lastIndex){
		if(lastIndex < firstIndex){
			return true;
		} else {
			if(word[firstIndex] === word[lastIndex]){
				return helper(firstIndex + 1, lastIndex - 1);
			} else {
				return false;
			}
		}
	}
	return helper(0, word.length - 1);
}

var arr = ["bob", "cat", "dad", "ob"];

function allPalsPapi(arr){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		for(var j = i + 1; j < arr.length; j++){
			var current = arr[i] + arr[j];
			if(isPal(current)){
				result.push(i, j);
			}
		}
	}
	return result;
}



// COMMON PATTERNS -- KNOW THESE !

// finding if duplicates exist in an array -- just need to check if one duplicate exists in array then you can break out
function containsDuplicates(a) {
	var map = {};
	for(var i = 0; i < a.length; i++){
		if(map[a[i]]){
			return true;
		} else {
			map[a[i]] = true;
		}
	}
	return false;
}

// two sum function but with two arrays instead of one
function sumOfTwo(a, b, v) {
	var map = {};
	for(var i = 0; i < a.length; i++){
		var difference = v - a[i];
		map[difference] = true;
	}
	for(var j = 0; j < b.length; j++){
		if(map[b[j]]){
			return true;
		}
	}
	return false;
}

// add up all the sums within the given range O(n^2)
// nums = [3, 0, -2, 6, -3, 2], queries = [[0,2], [2,5], [0,5]]
// [0,2] sum in range --> 1
// [2,5] sum in range --> 3
// [0,5] sum in range --> 6
// expected output: 7 --> 1 + 3 + 6
function sumInRange(nums, queries) {
    var count = 0;
    for(var i = 0; i < queries.length; i++){
        var currentQuery = queries[i];
        for(var j = currentQuery[0]; j <= currentQuery[1]; j++){
            count += nums[j];
        }
    }
    return count;
}

// using prefix sum here to keep track of running total of each element so all you have to do is find the difference with the queries you have available -- better run time than above solution O(nm)
function sumInRange(nums, queries) {
	var sum = 0, prefix = [sum], sumInRange = 0;
	for(var i = 0; i < nums.length; i++){
		sum += nums[i];
		prefix[i + 1] = sum;
	}
	for(var j = 0; j < queries.length; j++){
		var currentQuery = queries[j];
		sumInRange += (prefix[queries[j][1] + 1] - prefix[queries[j][0]]);
	}
	return sumInRange;
}

// using a common technique to count all positive numbers in an array
// [-2, 2, 5, -11, 6] --> 7
// idea behind algorithm:
	// look for all positive contiguous segments of the array (maxAtPosition is used for this)
	// keep track of maximum sum of contiguous segment among all positive segments (max is used for this)
	// each time we get a positive sum, compare it with maxAtPosition and update max if it is greater than maxAtPosition
function arrayMaxConsecutiveSum2(inputArray) {
	var max = 0, maxAtPosition = 0;
	for(var i = 0; i < inputArray.length; i++){
		maxAtPosition += inputArray[i];
		if(maxAtPosition < 0){
			maxAtPosition = 0;
		}
		if(max < maxAtPosition){
			max = maxAtPosition;
		}
	}
	return max;
}
// example walkthrough:
// [-2, 2, 5, -11, 6]
// max = 0, maxAtPosition = 0

// for i=0, a[0] = -2
// maxAtPosition += (-2)
// Set maxAtPosition = 0 because maxAtPosition < 0

// for i=1, a[1] = 2
// maxAtPosition += (2)
// maxAtPosition = 2
// max is updated to 4 because maxAtPosition is greater than max which was 0 til now

// for i=2, a[2] = 5
// maxAtPosition += (5)
// maxAtPosition = 7
// max is updated to 7 because maxAtPosition is greater than max

// for i=3, a[1] = -11
// maxAtPosition += (-11)
// Set maxAtPosition = 0 because maxAtPosition < 0

// for i=4, a[4] = 6
// maxAtPosition += (6)

// return max which is 7

// this implementation handles negatives and positive numbers in the case the array is all negative numbers
[-2, 2, 5, -11, 6]
function arrayMaxConsecutiveSum2(inputArray) {
	var currentMax = inputArray[0], maxAtPosition = inputArray[0];
	for(var i = 1; i < inputArray.length; i++){
		currentMax = Math.max(inputArray[i], currentMax + inputArray[i]);
		maxAtPosition = Math.max(currentMax, maxAtPosition);
	}
	return maxAtPosition;
}

0 -- max = -2, maxAtPosition = -2
1 -- max = 2, maxAtPosition = 2
2 -- max = 7, maxAtPosition = 7
3 -- max = -4, maxAtPosition = 7
4 -- max = 6, maxAtPosition = 7


var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

function fibs(n){
	var fibonacci = [0, 1];
	if(n === 0){ return []; }
	if(n === 1){ return [0]; }
	while(fibonacci.length < n){
		fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1])
	}
	return fibonacci;
}

function fibsRecursive(n){
	var fibonacci = [0, 1];
	if(n === 0) { return []; }
	function helper(idx){
		if(idx > n){
			return;
		} else {
			fibonacci[idx] = fibonacci[idx - 2] + fibonacci[idx - 1];
			helper(idx + 1);
		}
	}
	helper(2);
	fibonacci.splice(fibonacci.length - 1);
	return fibonacci;
}



// Return all unique pairs in an array that add up to passed in target
pairSum([1, 2, -1], 0) // = [ [-1, 1] ]
pairSum([1, 2, -1, -1], 0) // = [ [-1, 1] ]
pairSum([1, 2, -1, -1, -2], 0) // = [ [-1, 1], [-2, 2] ]
pairSum([1, 2, -1, -1, -2], 1) // = [ [-1, 2] ]
pairSum([1, 2, -1, -1, -2], -1) // = [ [-2, 1] ]

function pairSum(arr, target){
	// map to hold unique keys from array
	// result array to hold all pairs that add up to target
	var map = {}, result = [];
	for(var i = 0; i < arr.length; i++){
		var current = arr[i];
		var difference = target - current;
		if(map[difference] !== undefined){
			result.push([current, difference])
		}
		map[current] = true;
	}
	// uniqueMap to hold all unique pairs found in result array
	// uniquePairs array to hold ONLY unique pairs
	var uniqueMap = {}, uniquePairs = [];
	for(var j = 0; j < result.length; j++){
		var key = result[j];
		if(uniqueMap[key] === undefined){
			uniquePairs.push(result[j]);
			uniqueMap[key] = "found";
		}
	}
	return uniquePairs;
}

// various twoSums solutions:
// twoSum - returns all pairs
function twoSum(nums, target){
	var map = {}, pairs = [];
	for(var i = 0; i < nums.length; i++){
		var current = nums[i];
		var difference = target - current;
		if(map[difference]){
			pairs.push([current, difference]);
		}
		map[current] = true;
	}
	return pairs;
}
twoSum([1, 6, 4, 5, 3, 3], 7);

// twoSum - returns only unique pairs
function twoSum(nums, target){
	var map = {}, unique = {}, pairs = [];
	for(var i = 0; i < nums.length; i++){
		var current = nums[i];
		var difference = target - current;
		if(map[difference] !== undefined){
			if(unique[difference] === undefined){
				pairs.push([current, difference]);
			}
			unique[difference] = true;
		}
		map[current] = true;
	}
	return pairs;
}

// twoSum - returns indices where target is found -- asuming only one pair found in list, not ALL pairs
function twoSum(nums, target){
	var map = {};
	for(var i = 0; i < nums.length; i++){
		var current = nums[i];
		var difference = target - current;
		if(map[difference] !== undefined){
			return [map[difference], i];
		}
		map[current] = i;
	}
	return false;
}
console.log(twoSum(arr, 0))



// convert an integer to its roman numeral
function romanToInteger(numeral){
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    var integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = 0;
    for(var i = 0; i < roman.length; i++){
        var current = roman[i];
        while(numeral.indexOf(current) === 0){
            result += integers[i];
            str = str.replace(current, "");
        }
    }
    return result;
}
console.log(romanToInteger("MCMLXXXIX"));

// convert a roman numeral to integer
function integerToRoman(num){
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    var integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";
    for(var i = 0; i < integers.length; i++){
        var current = integers[i];
        while(num % current < num){
            result += roman[i];
            num -= current;
        }
    }
    return result;
}
console.log(toRoman(1989));



// threeSum -- return the indices where 3 elements add up to target
function threeSum(arr, target){
    var hash = {}, result = [];
    for(var i = 0; i < arr.length; i++){
        var currOutter = arr[i];
        for(var j = i + 1; j < arr.length; j++){
            var currInner = arr[j];
            var difference = target - (currOutter + currInner);
            if(hash[difference] !== undefined){
                result.push(hash[difference], i, j);
                return;
            }
            if(hash[currOutter] === undefined){
                hash[currOutter] = i;
            }
        }
    }
    return result;
}