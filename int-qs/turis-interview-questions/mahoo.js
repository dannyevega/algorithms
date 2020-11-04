// Yahoo Technical Phone Screen Interview. Front End Engineer Role.
/*
Write a function to remove duplicates
let arr = [1,2,1,3,4,2,5,6,7,3] should return [ 1, 2, 3, 4, 5, 6, 7 ]
*/
const removeDuplicates = (arr) => {
  let map = {};
  arr.forEach(num => {
    map[num] = num;
  });
  let uniq = Object.keys(map).map(current => {
    return map[current];
  });
  return uniq;
}
// console.log(removeDuplicates(arr));

// const removeDuplicates = (arr) => {
//   let result = [];
//   arr.forEach(current => {
//     if(result.indexOf(current) === -1){
//       result.push(current);
//     }
//   });
//   return result;
// }

// const removeDuplicates = (arr) => {
//   return arr.filter((el, idx, ref) => {
//     return ref.indexOf(el) === idx;
//   });
// }



/*
Write a function to check if two strings are anagrams
Definition: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/
let one = 'iceman', two = 'cinema';

const angagram = (s1, s2) => {
  for(let i = 0; i < s1.length; i++){
    let char = s1[i];
    if(s2.indexOf(char) === -1){
      return false;
    }    
  }
  return true;
}

// const angagram = (s1, s2) => {
//   let map = {};
//   for(let i = 0; i < s1.length; i++){
//     let char = s1[i];
//     if(map[char] === undefined){
//       map[char] = 0;
//     }
//     map[char]++;
//   }
//   for(let j = 0; j < s2.length; j++){
//     let char = s2[j];
//     if(map[char] === undefined){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(angagram(one, two));