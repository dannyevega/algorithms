// Array problems for Interview Prep in HR

/*
PROBLEM ONE: Hourglass Sum

Given a 6x6 2D array:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For the above, the returned value should be 7

1 1 1
  1  
1 1 1
*/

const hourglassSum = (arr) => {
  let result = [];
  for(let i = 0; i <= arr.length / 2; i++){
    for(let j = 0; j <= arr.length / 2; j++){
      result.push(
        (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) +
        (arr[i + 1][j + 1]) +
        (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
      );
    }
  }
  return Math.max.apply(null, result);
}





/*
PROBLEM TWO: Left Rotation

A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array A of N integers and a number, D, perform D left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Another example:
input: [1,2,3,4,5]
output: [5,1,2,3,4]
*/

const rotLeft = (a, d) => {
  // check if there are enough elements to rotate OR if amount of rotations is equal to length of array -- then return
  if(a.length < 2 || d === a.length){
    return a.slice(0); // always good to return a copy of the input, not the input itself
  }

  return a.slice(rotations).concat(a.slice(0, rotations));
}