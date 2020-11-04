// implement Pythons range function in JS

const range = (start, stop, step = 1) => {
  let result = [];
  if(stop === undefined){
    stop = start;
    start = 0;
  }

  for(let i = start; step > 0 ? i < stop : i > stop; i += step){
    result.push(i);
  }
  return result;
}

range(4) // [0,1,2,3]
range(2, 10) // [2,3,4,5,6,7,8,9]
range(1, 10, 2) // [1,3,5,7,9]
range(10, 2, -1) // [10,9,8,7,6,5,4,3]
range(8,2) // []
range(1,5,-1) // []