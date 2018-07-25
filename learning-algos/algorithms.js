// FizzBuzz
const fizzBuzz = (num) => {
  for(let i = 1; i <= num; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log('FizzBuzz');
    } else if (i % 3 === 0){
      console.log('Fizz');
    } else if (i % 5 === 0){
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}



// Harmless Ransom Note
// Two parameters passed in -- a note and magazine text. See if you the note can be created using the magazine text provided
// Example:
// var note = "this is a note for you from a secret admirer"
// var magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you"
// result: true

// PSEUDOCODE
// iterate thru the magazine text
	// keep track of each word count in map
// iterate thru note text
	// if you find a word in the magazineText, reduce its count by 1 each time and continue
	// above ensures there are accurate amount of words in magazineText to accomodate for words in note
		// i.e. 'secret' is only found once - if we have two 'secret' words in note, it will be 0 the second time and evaluate to false
// return true is you're able to loop through entire note - otherwise return false

const harmlessRansomNote = (noteText, magazineText) => {
  let map = {};
  let splitMagazine = magazineText.split(" ");
  let splitNote = noteText.split(" ");
  for(let i = 0; i < splitMagazine.length; i++){
    let current = splitMagazine[i];
    if(map[current] === undefined){
      map[current] = 0;
    }
    map[current]++;
  }
  for(let j = 0; j < splitNote.length; j++){
    let current = splitNote[j];
    if(map[current]){
      map[current]--;
      continue;
    }
    return false;
  }
  return true;
}



// isPalindrome
const isPalindrome = (word) => {
  word = word.replace(/[^\w\s]/gi, '').replace(/ /g, '').toLowerCase();
  let last = word.length - 1;
  for(let i = 0; i < word.length / 2; i++){
    if(word[i] === word[last]){
      last--;
      continue;
    }
    return false;
  }
  return true;
}

const isPal = (word) => {
	word = word.replace(/[^\w\s]/gi, '').replace(/ /g, '').toLowerCase();
	var i = 0, j = word.length - 1;
	while(i < word.length / 2){
		if(word[i] === word[j]){
			i++;
			j--;
			continue;
		}
		return false;
	}
	return true;
}
"racecar"
"Madam, I'm Adam"



// caesarCipher
const caesarCipher = (phrase, shift) => {
  // in case shift is really large number like 300, need to wrap all the way around
  shift = shift % 26;
  const letters = "abcdefghijklmnopqrstuvwxyz";
  // make all letters lowercase to make finding index easier
  let lowercase = phrase.toLowerCase();
  let ciphered = "";
  for(let i = 0; i < lowercase.length; i++){
    let current = lowercase[i];
    let currentIndex = letters.indexOf(current);
    let newIndex = currentIndex + shift;
    // if current character is a anything else besides a letter, currentIndex will be -1 so we can push into ciphered
    // in case of spaces or any other character
    if(currentIndex === -1){
      ciphered += current;
      continue;
    }
    // if newIndex is greater than 25, need to use modulus to wrap back around
    if(newIndex > 25){
      newIndex = newIndex % 26;
    }
    // if new index is less than 0, need to make positive to find letter
    if(newIndex < 0){
      newIndex = 26 + newIndex;
    }
    if(phrase[i] === phrase[i].toUpperCase()){
      ciphered += letters[newIndex].toUpperCase();
    } else {
      ciphered += letters[newIndex];
    }
  }
  return ciphered;
}
// "zoo keeper" --> "bqq mggrgt"



// Reverse a string in place
const reversePhrase = (phrase) => {
  phrase = phrase.split(" ");
  let reversedPhrase = [];
  for(let i = 0; i < phrase.length; i++){
    let current = phrase[i];
    let reversed = reverseWord(current);
    reversedPhrase.push(reversed);
  }
  return reversedPhrase.join(" ");
}

const reverseWord = (word) => {
  word = word.split("");
  let last = word.length - 1;
  for(let i = 0; i < word.length / 2; i++){
    [word[i], word[last]] = [word[last], word[i]];
    last--;
  }
  return word.join("");  
}

// const reverseWord = (word) => {
//   let split = word.split("");
//   let start = 0;
//   const helper = (index) => {
//     if(index < start){
//       return;
//     } else {
//       [split[start], split[index]] = [split[index], split[start]];
//       start++;
//       helper(index - 1);
//     }
//   }
//   helper(word.length - 1);
//   return split.join(" ")
// }

const reversePhrase = (phrase) => {
  phrase = phrase.split(" ");
  let reversed = [];
  phrase.forEach(word => {
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0; i--){
      reversedWord += word[i];
    }
    reversed.push(reversedWord);
  });
  return reversed.join("");
}

// 'ekat a tnemom ot tnuoc ym paug'
// console.log(reversePhrase('take a moment to count my guap'));



// Reverse array in place
const reverseArray = (arr) => {
  let last = arr.length - 1;
  for(let i = 0; i < arr.length / 2; i++){
    [arr[i], arr[last]] = [arr[last], arr[i]];
    last--;
  }
  return arr;
}
// console.log(reverseArray([1,2,3,4,5]));

const reverseArray = (arr) => {
	let last = arr.length - 1;
	const helper = (start) => {
		if(start > last){
			return;
		} else {
			[arr[start], arr[last]] = [arr[last], arr[start]];
			last--;
			helper(start + 1);
		}
	}
	helper(0);
	return arr;
}



// get Median, Median and Mode in one function fam
const getMeanMedianMode = (arr) => {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

const getMean = (arr) => {
  let sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  return sum / arr.length;
}

const getMedian = (arr) => {
  let median;
  arr.sort((a, b) => {
    return a - b;
  });
  if(arr.length % 2 !== 0){
    median = arr[Math.floor(arr.length / 2)];
  } else {
    let first = arr[(arr.length / 2) - 1];
    let second = arr[arr.length / 2];
    median = (first + second) / 2;
  }
  return median;  
}

const getMode = (arr) => {
  let map = {};
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    if(map[current] === undefined){
      map[current] = 0;
    }
    map[current]++;
  }
  let modes = [];
  let count = 0;
  for(let num in map) {
    if(map[num] > count) {
      modes = [parseInt(num)];
      count = map[num];
    } else if (map[num] === count) {
      modes.push(parseInt(num));
    }
  }
  if(modes.length === Object.keys(map).length){
    modes = [];
  }
  return modes;
}



// twoSum - returns all pairs
const twoSum = (arr, target) => {
  let pairs = [];
  let map = {};
  let unique = {};
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let difference = target - current;
    if(map[difference] !== undefined){
      if(unique[difference] === undefined){
        pairs.push([difference, current]);        
      }
      unique[current] = true;
      unique[difference] = true;
    }
    map[current] = true;
  }
  return pairs;
}
// console.log(twoSum([1,6,4,5,3,3], 7));
// console.log(twoSum([1,6,4,5,3,3], 7));



// threeSum - returns all unique pairs that add up to target
const threeSum = (arr, target) => {
  let map = {}, uniq ={}, pairs = [];
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let next = arr[i + 1];
    let difference = target - (current + next);
    if(map[difference] !== undefined){
      let triplets = [difference, current, next].sort();
      uniq[triplets] = triplets;
    }
    map[current] = true;
  }
  return Object.keys(uniq).map(current => uniq[current]);
}
// let arr = [-1, 0, 1, 2, -1, -4, 2, 2]
// expected output: [ [ -1, 0, 1 ], [ -1, -1, 2 ], [ -4, 2, 2 ] ]


// this will return ALL pairs, not only unique ones
const threeSum = (arr, target) => {
  let map = {}, pairs = [];
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let next = arr[i + 1];
    let difference = target - (current + next);
    if(map[difference] !== undefined){
      pairs.push([difference, current, next]);
    }
    map[current] = true;
  }
  return pairs;
}

// let arr = [-1, 0, 1, 2, -1, -4], target = 0;
// expected output: [[-1, 0, 1], [-1, 2 -1]];
// console.log(threeSum(arr, target));



// binarySearch
const binarySearch = (arr, target) => {
  let middle;
  const helper = (start, end) => {
    if(start > end){
      return -1;
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
// [1,2,4,5,7,9,12,14,20,23], 2 --> 7


// fibonacci
const fibonacci = (position) => {
  let fibs = [1, 1];
  const helper = (index) => {
    if(index > position){
      return;
    } else {
      fibs[index] = fibs[index - 2] + fibs[index - 1];
      helper(index + 1);
    }
  }
  helper(2);
  return fibs[position - 1]; 
}

// const fibonacci = (position) => {
//   if(position < 3){
//     return 1;
//   }
//   return fibonacci(position - 2) + fibonacci(position - 1);
// }


const fibMemo = (index, cache) => {
  cache = cache || {};
  console.log('out', cache)
  if(cache[index]){
    console.log('inside 1st if', cache)
    return cache[index];
  } else {
    if(index === 0 || index === 1){
      console.log('inside 2nd if', index)
      return index;
    } else {
      console.log('before', cache)
      console.log('cache[index]', cache[index])
      cache[index] = fibMemo(index - 2, cache) + fibMemo(index - 1, cache);
      console.log('after', cache)
    }
  }
  return cache[index]
}
// console.log(fibMemo(4));



// Sieve of Eratosthenes to find all prime numbers below a passed in num

// iterate n times and push true into an empty reult array
// set 0 and 1 to false
// iterate through result array starting at j = 2
  // inner for loop starting at k = 2
  // multiply k and j setting them equal to false in result array
// iterate trough result array
  // if current item is equal to true, push into primes array
// return primes array

function sieveOfEratosthenes(n){
	var primes = [], result = [];
	for(var i = 0; i < n; i++){
		primes.push(true);
	}
	primes[0] = false;
	primes[1] = false;
	for(var j = 2; j < Math.sqrt(n); j++){
		for(var k = 2; k * j <= n; k++){
			primes[k * j] = false;
		}
	}
	for(var l = 0; l < primes.length; l++){
		if(primes[l] === true){
			result.push(l);
		}
	}
	return result;;
}

const sieveOfEratosthenes = (num) => {
  let result = [];
  let primes = [];
  for(let i = 0; i < num; i++){
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  for(let j = 2; j < Math.sqrt(num); j++){
    for(let k = 2; k * j <= num; k++){
      primes[k * j] = false;
    }
  }
  for(let l = 0; l < primes.length; l++){
    let current = primes[l];
    if(current === true){
      result.push(l);
    }
  }
  return result;
}

const findPrimeFactors = (num) =>{
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

const isPrime = (num) =>{
  for(var i = 2; i * i <= num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}



const bubbleSort = (arr) => {
  let i, j, limit = arr.length, changed = false;
  while(limit--){
    for(i = 0, j = 1; i < limit; i++, j++){
      if(arr[i] > arr[j]){
        changed = true;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    if(!changed){
      return arr;
    }
  }
  return arr;
}
// console.log(bubbleSort([4,3,12,1,19,20,29,55,14,21,88]));

const mergeSort = (arr) => {
  let result = [], leftCount = 0, rightCount = 0, left, middle, right;

  if(arr.length < 2){
    return arr;
  }

  middle = Math.floor(arr.length / 2);
  left = mergeSort(arr.slice(0, middle));
  right = mergeSort(arr.slice(middle));

  while(leftCount < left.length && rightCount < right.length){
    if(left[leftCount] < right[rightCount]){
      result.push(left[leftCount]);
      leftCount++;
    } else {
      result.push(right[rightCount]);
      rightCount++;
    }
  }
  return result.concat(left.slice(leftCount).concat(right.slice(rightCount)));
}
// console.log(mergeSort([4,3,12,1,19,20,29,55,14,21,88]));



// find the greatest possible profit from a given days stock prices from beginning to end of day

// create variables for buyPrice, sellPrice and maxProfit set to 0, changePrice set to true
// iterate thru array
// set buyPrice to first element in arr
// set sellPrice to second element in arr
// ONLY change buyPrice if next element is less than buyPrice
// if sellPrice is not less than buyPrice
  // set changePrice to false
  // find tempProfit
  // if temp profit is greater than maxProfit, set max to tempProfit
// return maxProfit

const maxStockProfit = (arr) => {
  let maxProfit = 0;
  let buyPrice;
  let sellPrice;
  let changedBuyPrice = true;
  for(let i = 0; i < arr.length; i++){
    if(changedBuyPrice){
      buyPrice = arr[i];
    }
    sellPrice = arr[i + 1];
    if(sellPrice < buyPrice){
      changedBuyPrice = true;
    } else {
      let difference = sellPrice - buyPrice;
      if(difference > maxProfit){
        maxProfit = difference;
      }
      changedBuyPrice = false;
    }
  }
  return maxProfit;
}
// console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
