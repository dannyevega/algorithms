// Asked various questions about diversity, common JS questions, how I like to work, projects I've worked on etc...

// Write a function that removes duplicates from a string.

const removeDuplicates = (str) => {
  let lowercaseStr = str.toLowerCase();
  let map = {}, result = '';
  for(let i = 0; i < lowercaseStr.length; i++){
    let current = lowercaseStr[i];
    if(current === ' '){
      result += current;
      continue;
    }
    if(map[current] === undefined){
      if(current.toUpperCase() === str[i]){
        result += str[i];
      } else {
        result += current;
      }      
    }
    map[current] = true;
  }
  return result;
}

console.log(removeDuplicates('Coding JavaScript!!!')) // returns 'Coding JavSrpt!'