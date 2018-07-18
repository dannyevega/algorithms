// find the first non-repeating character in a string
// if there are two non-repeating characters, return the first one

// this solution solves in linear time
// we assume repeating character means 'aa', 'bb', 'cc' etc
// so we can check each current character with the one next to it
// anytime the one next to the current element is not the same, we return it
// increment by 2 since it will be every 2 characters

let str = 'aabbcdd'; // c
let str = 'aabc'; // b
let str = 'xxyyz'; // z
let str = 'xxyy'; // null

const firstNonRepeating = (str) => {
  for(let i = 0; i < str.length; i += 2){
    let current = str[i];
    let next = str[i + 1];
    if(current !== next){
      return current;
    }
  }
  return null;
}

console.log(firstNonRepeating(str));





// Write a function that returns true if a string is one character away from the second string
// Examples:
// one = 'abcde', two = 'abfde' --> true -- if strings are identical, return true
// one = 'abcde', two = 'abde' --> true
// one = 'xyz', two = 'xyaz' --> true

const oneEditAway = (s1, s2) => {
  if(s1.length - s2.length >= 2 || s2.length - s1.length >= 2){
    return false;
  } else if(s1.length === s2.length){
    return sameLength(s1, s2);
  } else if(s1.length > s2.length){
    return oneCharAway(s1, s2);
  } else {
    return oneCharAway(s2, s1);
  }
}

const sameLength = (s1, s2) => {
  // if strings are the exact same, return true
  if(s1 === s2){
    return true;
  } else {
    // we check if strings are one edit away
    let difference = 0;
    for(let i = 0; i < s1.length; i++){
      // anytime we see two different characters, increment difference
      if(s1[i] !== s2[i]){
        difference++;
      }
      // check count of difference each iteration -- if we ever go past 1, return false -- no need to continue iterating
      if(difference > 1){
        return false;
      }      
    }
    return true;
  }
}

const oneCharAway = (s1, s2) => {
  let count = 0, difference = 0;
  while(count < s2.length){
    // check whether count + difference is equal to s2 at count
    // if we ever have a difference which should only be 1 at max, we keep the current index count at the same position and check the element in the other string because it should be equal
      // i.e. count = 2, difference = 1 in 3rd iteration
      // s1[2 + 1] = 'z', s2[2] = 'z' --> this is true and onle had one difference
    if(s1[count + difference] === s2[count]){
      count++;
    } else {
      difference++;
      // if there is another difference, we know there is more than one difference so we return false      
      if(difference > 1){
        return false;
      }
    }
  }
  return true;
}

console.log(oneEditAway('xyaz', 'xyz'));