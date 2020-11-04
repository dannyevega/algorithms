/*

Given an stream of strings as input, return the highest occuring string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd' --> 'ccc'
Return: 'ccc'

*/

// If there are multiple strings that ocurr once, return the first unique string.

let strings = ['a', 'bb', 'ccc', 'z', 'ccc', 'bb', 'a', 'dd', 'ccc'];

function highestOccurence(input){
  let map = {}, count = 0, max = null;
  input.forEach(str => {
    if(map[str] === undefined){
      map[str] = 0;
    }
    map[str]++;
    if(map[str] > count){
      count = map[str];
      max = str;
    }
  });
  return max;
}

highestOccurence(strings);



// --------------------------------------------------------------------------------



/*

Given an stream of strings as input, return the first unique string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd'
Return: 'z'

*/

let strings = ['a', 'bb', 'ccc', 'z', 'ccc', 'bb', 'a', 'dd'];

function uniqueOccurence(input){
  let map = {};
  input.forEach(str => {
    if(map[str] === undefined){
      map[str] = 0;
    }
    map[str]++;
  });
  for(let str in map){
    if(map[str] < 2){
      return str;
    }
  }
}

uniqueOccurence(strings);



