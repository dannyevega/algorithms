// Facebook Final Technical
/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = [-1 0 1 2 -1 -4 ],

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

let arr = [-1, 0, 1, 2, -1, -4, 2, 2]
expected output: [ [ -1, 0, 1 ], [ -1, -1, 2 ], [ -4, 2, 2 ] ]    
*/
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