/*
We're going to write a function that accepts a string as input 
and returns an array containing all contiguous substrings.

input : "cat"
output : ["c", "a", "t", "ca", "at", "cat"]

things to point out:
- order of the array does not matter
- duplicates are not important. i.e. no need to de-dupe the list in the case of “caat”, for example
*/

const getSubstrings = (str) => {
  let result = [];
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j <= str.length; j++){
      result.push(str.slice(i, j));
    }
  }
  return result;
}
getSubstrings('cat');
