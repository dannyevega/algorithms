// A shopkeeper has a sale to complete and has arranged the items being sold in an array. Starting from the left, the shopkeeper rings up each item at its full price less the price of the first lower or equal priced item to its right. If there is no item to the left that cost less than or equal to the current items price, the current item is sold at full price. 

// Example --> items = [2,3,1,2,4,2]
// the first and second item would be discounted by 1 unit, the first equal or lower price to the right. The item priced 1 unit would sell at full price since there is nothing less than or equal to the right of it. The next item at 2 units would be discounted 2 units and the 4 unit item would also be discounted by 2. The sixth and final item must be purchased at full price. 
// the total cost is 1 + 2 + 1 + 0 + 2 + 2 = 8 units
// write a function that returns the new discounted priced on one line and on the next line, print a space separated list of integers represeting the indexes of the non-dsicounted items in ascending index order

// shopkeeper needs to return discounted price for all items in Array
// shopkeeper discounts every current item by the FIRST item to the right of current item that is LESS THAN or EQUAL to current item
// if there is no item to right of current item that is LESS THAN or EQUAL to current item, then the current item is charged at full price
// return total disocunted prices
// return list of indices if a item was not discounted i.e. charged full price

// [1,2,1,0,2,2] -- > 8
// non-disoucnted items --> [2,5]
const finalDiscountedPrice = (arr) => {
  let discountedPrice = 0;
  let nonDiscounted = [];
  let itemDiscounted;
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    itemDiscounted = false;
    for(let j = i + 1; j < arr.length; j++){
      let next = arr[j];
      if(next <= current){
        let difference = current - next;
        discountedPrice += difference;
        itemDiscounted = true;
        break;
      }
    }
    if(itemDiscounted === false){
      discountedPrice += current;
      nonDiscounted.push(i);
    }
  }
  console.log('final discounted price: ', discountedPrice);
  console.log('non-disounted items: ', nonDiscounted.join(" "));
}
// finalDiscountedPrice(arr);





// Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
let one = [1, 3, 15, 11, 2];
let two = [23, 127, 235, 19, 8];
// expected output: 3

// let one = [10, 5, 40];
// let two = [50, 90, 80];
// expected output: 10

// initially, my first reaction is to just use the naive approach with O(n^2) -- this will allow us to compare each value in each array to compute the shortest distance
// once we get a solution, we can optimize to do this in one pass instead of 2
// const shortestDistance = (one, two) => {
//   let smallest;
//   for(let i = 0; i < one.length; i++){
//     let current = one[i];
//     for(let j = 0; j < two.length; j++){
//       let difference = Math.abs(current - two[j]);
//       if(smallest === undefined){
//         smallest = difference;
//       }
//       if(difference < smallest){
//         smallest = difference;
//       }      
//     }
//   }
//   return smallest;
// }

// console.log(shortestDistance(one, two));

// after getting a solution to the problem, we can optimize. 
// I initially think to sort the two arrays in ascending order then compare each current value
// for example:
// let one = [1, 2, 3, 11, 15];
// let two = [8, 19, 23, 127, 235];

// at the first pass, the current difference between A and B is 7 -- store this as the smallest value
// how to make the difference potentially smaller? The value at B (8) is larger than the value at A (1) so moving B will only make the difference larger -- so we want to move A
// Now, A points to 2 and B is still pointing at 8 -- the difference is 6 so we update the smallest value
// A is still smaller than B so we move A
// Now, A points to 3 and B is still pointing at 8 -- the difference is 5 so we update the smallest value and move A since B is larger
// Now, A points to 11 and B points to 8 -- the difference is 3 so we update
// Continue this pattern

const shortestDistance = (one, two) => {
  let smallest, first = 0, second = 0;
  // sort both arrays to make comparisons easier
  one.sort(function(a, b){
    return a - b;
  });
  two.sort(function(a, b){
    return a - b;
  });
  // iterate while both pointers are less than the length of the array
  while(first < one.length && second < two.length){
    // gather values in variable to make comparisons easier
    let firstValue = one[first];
    let secondValue = two[second];
    // were only concerned with the difference either way so get absolute value
    let difference = Math.abs(firstValue - secondValue);
    // set initial difference to smallest value since well need this value to compare all other differences
    if(smallest === undefined){
      smallest = difference;
    }
    // update if any other difference is less than current smallest
    if(difference < smallest){
      smallest = difference;
    }
    // move pointer on first or second depending on which value is lesser
    if(firstValue < secondValue){
      first++;
    } else {
      second++;
    }
  }
  return smallest;
}

// const shortestDistance = (one, two) => {
//   let smallest, first = 0, second = 0;
//   one.sort(function(a, b){
//     return a - b;
//   });
//   two.sort(function(a, b){
//     return a - b;
//   });
//   while(first < one.length && second < two.length){
//     let firstValue = one[first];
//     let secondValue = two[second];
//     let difference = Math.abs(firstValue - secondValue);
//     if(smallest === undefined){
//       smallest = difference;
//     }
//     if(difference < smallest){
//       smallest = difference;
//     }
//     if(firstValue < secondValue){
//       first++;
//     } else {
//       second++;
//     }
//   }
//   return smallest;
// }

// console.log(shortestDistance(one, two));





// Given a date formatted like this: "20th Mar 1989"
// Create a function that returns the date formatted in a string like this: "1989-03-20"
const date = "20th Mar 1989";
// "1989-03-20"

const formatDate = (date) => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let splitDate = date.split(" ");
  let year = splitDate[2];
  let month = months.indexOf(splitDate[1]) + 1;
  if(month < 10){
    month = `0${month}`;
  }
  let day = splitDate[0];
  if(day.length === 3){
    day = day.slice(0,1);
  }
  if(day.length === 4){
    day = day.slice(0,2);
  }
  if(day < 10){
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
}
// console.log(formatDate(date));






// find the missing number
const findMissingNumber = (arr) => {
  arr.sort();
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - arr[i - 1] !== 1){
      return arr[i] - 1;
    }
  }
}
// findMissingNumber([ 8, 4, 3, 5, 9, 2, 1, 6 ]);






// Write a function that removes duplicates from a string.
const removeDuplicates = (str) => {
  let map = {}, result = '';
  for(let i = 0; i < str.length; i++){
    let current = str[i];
    if(map[current] === undefined){
      result += current;
      map[current] = true;
    }
  }
  return result;
}
// console.log(removeDuplicates('Coding JavaScript!!!')) // returns 'Coding JavScrpt!'