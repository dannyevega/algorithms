// Write a function that adds a space in between each letter
// Input: 'hello world'
// Output: 'h e l l o  w o r l d'

// const addSpaces = (str) => {
//   str = str.split("");
//   let result = "";
//   for(let i = 0; i < str.length; i++){
//     let current = str[i];
//     if(current === " "){
//       continue;
//     }
//     result += (current + " ");
//   }
//   return result.trim();
// }

const addSpaces = (str) => {
  str = str.split("");
  let result = str.map(char => {
    return char + " ";
  });
  return result.join("");
}
// console.log(addSpaces('hello world'));



// Write a function to find all unique values in an array
// Input: [1,1,2,3,4,5]
// Output: [1,2,3,4,5]

const findUniqueValues = (arr) => {
  let map = {}, result = [];
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    if(map[current] === undefined){
      map[current] = current;
    }
  }
  for(let key in map){
    result.push(map[key]);
  }
  return result;
}
// console.log(findUniqueValues([1,1,2,3,4,5]));

// ES6
// list = list.filter((x, i, a) => a.indexOf(x) == i)

// x --> item in array
// i --> index of item
// a --> array reference, (in this case "list")

// ES5
// list = list.filter(function (x, i, a) { 
//     return a.indexOf(x) == i; 
// });



// Write a function to check if a string anagram can be rearranged to be a palindrome. Return true if it can be rearranged, otherwise, return false
// Input: 'abab%'
// Output: true --> 'ab%ba'
// Input: 'abab%&'
// Output: false

const isAnagramPalindrome = (str) => {
  let map = {};
  for(let i = 0; i < str.length; i++){
    let current = str[i];
    if(map[current] === undefined){
      map[current] = 0;
    }
    map[current]++;
  }
  let count = 0;
  for(let char in map){
    if(map[char] % 2 !== 0){
      count++;
    }
    if(count > 1){
      return false;
    }
  }
  return true;
}
