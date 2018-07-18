// ARRAYS

// Find most frequently occuring item in a given array
// Assume theres always a single unique value that appears most frequently unless array is empty

// naive solution -- O(nm) --> iterate though array then iterate though map object you created
// const mostOccuring = (arr) => {
//   let map = {}, result = [];
//   for(let i = 0; i < arr.length; i++){
//     let current = arr[i];
//     if(map[current] === undefined){
//       map[current] = 0;
//     }
//     map[current]++;
//   }
//   for(let key in map){
//     result.push([key, map[key]]);
//   }
//   result.sort(function(a,b){
//     return b[1] - a[1];
//   });
//   return parseInt(result.slice(0,1));
// }

// optimal solution -- similar approach to above but while were updating our map, we can simultaneously check if the current value is greater than a maxCount variable and keep updating as needed
// 1 - create your map, maxCount and maxItem variables
// 2 - iterate thru the array and set the occurence of each item in array in our map every pass
// 3 - after we set the occurence, we check if that current occurence is greater than the max count
  // if it is, we update the maxCount to the current occurence and update the maxItem to the current value
// every pass, the current occurence is checked to see if it is greater than the current maxCount -- if the occurence is ever greater, we update the maxCount and maxItem
let arr = [1,3,1,3,2,1];

const mostOccuring = (arr) => {
  let map = {}, maxCount = 0, maxItem = null;
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    if(map[current] === undefined){
      map[current] = 0;
    }
    map[current]++;
    if(map[current] > maxCount){
      maxCount = map[current];
      maxItem = current;
    }
  }
  return maxItem;
}

console.log(mostOccuring(arr));





// Write a function that returns the common elements (as an array) between two sorted arrays of integers (ascending order)
// Example: A = [1,3,4,6,7,9], B = [1,2,4,5,9,10] --> [1,4,9]

// iterate through array A
// keep track of every element in that occurs in array by using a map
// then, iterate though array B
// check if current element in array B exists in array A
  // if so, push that current element into a result array
// return result

// naive solution -- O(nm) --> iterate through both lists separately
// const commonElements = (one, two) => {
//   let map = {}, result = [];
//   for(let i = 0; i < one.length; i++){
//     let current = one[i];
//     if(map[current] === undefined){
//       map[current] = 1;
//     }    
//   }
//   for(let j = 0; j < two.length; j++){
//     let current = two[j];
//     if(map[current]){
//       result.push(current);
//     }
//   }
//   return result;
// }

// optimal solution -- since we know both arrays are sorted in ascending order, we can compare each current element then increment a counter depending on which value is larger
// 1 - set two counters pointing at first element in each array
// 2 - check if current elements are the same, if true, push value into array
// 3 - increment both counters to next element in each array
// 4 - if elements are not equal, check which value is larger, then increment opposite counter
// 5 - continue til you reach end of both or one array
let A = [1,3,4,6,7,9], B = [1,2,4,5,9,10];

const commonElements = (one, two) => {
  let result = [], first, = 0, second = 0;
  while(first < one.length && second < two.length){
    let firstEl = one[first];
    let secondEl = two[second];
    if(firstEl === secondEl){
      result.push(firstEl);
      first++;
      second++;
    }
    if(firstEl > secondEl){
      second++;
    } else {
      first++;
    }
  }
  return result;
}

console.log(commonElements(A, B));





// Write a function that returns true if one array is a rotation of another array
// One array is a rotation of another -- two arrays contain the same elements in the same order but start at different indices
// Example:  B = [4,5,6,7,1,2,3] is a rotation of A = [1,2,3,4,5,6,7]
// Assume no duplicates in array

// 1 - check if both lengths of arrays are equal -- if not, return false
// 2 - check if first element in A is found in B -- if not, return false
// 3 - iterate through A
// 4 - set position of first element from A found in B equal to B's position plus the current position of A
  // use modulo here to wrap back around array once we reach end of B
// 5 - if anytime the two elements dont match, we can return false
let A = [1,2,3,4,5,6,7], B = [4,5,6,7,1,2,3];

const isRotation = (one, two) => {
  if(one.length !== two.length){
    return false;
  }
  let current = one[0];
  let posInSecond = two.indexOf(current);
  if(posInSecond === -1){
    return false;
  }
  for(let i = 0; i < one.length; i++){
    let second = (posInSecond + i) % one.length;
    if(one[i] !== two[second]){
      return false;
    }
  }
  return true;
}

console.log(isRotation(A, B));