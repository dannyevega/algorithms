// Asked various questions about ES6, JavaScript, React etc

// Write a function that given at array returns the largest product that can be made by multiplying members of the array

const testArr1 = [5, 6, 2, 0, 10, 4] // Result should be 6 * 10 = 60
const testArr2 = [3, -5, 1, 4, -9, 5] // Result should be -5 * -9 = 45

const largestProduct = (arr) => {
  let highest = (arr[0] * arr[1]);
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    for(let j = i + 1; j < arr.length; j++){
      let next = arr[j];
      if((current * next) > highest){
        highest = (current * next);
      }
    }
  }
  return highest;  
}

console.log(largestProduct(testArr2));

// -------------------------------------------------------------------------------------------------------------------------

const getProduct = (arr) => {
  // first, sort array so we have all negatives on one side and positives on the other -- this is linear
  arr = arr.sort((a, b) => {
    return a - b;
  });

  // do comparisons -- if negative, compare first two numbers in array since they might be large negative numbers and a negative multiplied by another negative is a positive
  if(arr[0] < 0){
    // get product of negatives
    let negatives = arr[0] * arr[1];
    // get product of positives
    let positives = arr[arr.length - 2] * arr[arr.length - 1];
    // compare negtive and positives
    if(negatives > positives){
      return negatives;
    } else {
      return positives;
    }
  } else {
    // only positive numbers 0 or greater
    return (arr[arr.length - 2] * arr[arr.length - 1]);
  }
}

console.log(getProduct(testArr1));