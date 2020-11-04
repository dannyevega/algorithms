// Write a function called intersect that returns all common elements in the multidimensional array

var arrayOfArrays = [
            [1, 5, 8, 11, 6], 
            [1, 5, 7, 11, 63],
            [1, 54, 81, 12, 5]
        ]; 

//[1,5]

const intersect = (list) => {
  let map = {}, result = [];
  list.forEach(arr => {
    arr.forEach(num => {
      if(map[num] === undefined){
        map[num] = 0;
      }
      map[num]++;
      if(map[num] === list.length){
        result.push(num);
      }
    });
  });
  return result;
}

intersect(arrayOfArrays)