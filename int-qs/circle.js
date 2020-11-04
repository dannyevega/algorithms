var arr = [
    ["Apple", "Banana", "Cream", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Hazelnut", "Cheese", "Sugar", "Cherry", "Cinnamon", "Cream", "LeftWins"],
    ["Custard", "Lemon", "Coconut", "Strawberry", "Blueberry", "Raspberry", "RightWins"],
    ["Cheese", "Hazelnut", "Sugar", "Banana", "Apple", "Cream", "RightWins"],
    ["Apple", "Banana", "Cream", "Lemon", "Custard", "Coconut", "RightWins"],
    ["Apple", "Banana", "Cream", "Cheese", "Sugar", "Hazelnut", "RightWins"],
    ["Apple", "Banana", "Cream", "Strawberry", "Raspberry", "Blueberry", "RightWins"],
    ["Cream", "Banana", "Apple", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Sugar", "Hazelnut", "Cheese", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Cream", "Apple", "Banana", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Apple", "Banana", "Cream", "Sugar", "Cheese", "Hazelnut", "RightWins"],
    ["Apple", "Banana", "Cream", "Date", "Eldeberry", "Fig", "RightWins"],
    ["Coconut", "Hazelnut", "Sugar", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Fig", "Eldeberry", "Date", "Banana", "Cream", "Apple", "RightWins"],
    ["Blueberry", "Strawberry", "Raspberry", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Sugar", "Banana", "Blueberry", "Date", "Eldeberry", "Fig", "RightWins"],
    ["Apple", "Banana", "Cream", "Hazelnut", "Coconut", "Raspberry", "RightWins"],
    ["Eldeberry", "Strawberry", "Cream", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Cheese", "Banana", "Apple", "Date", "Eldeberry", "Fig", "LeftWins"]
];

// you have an multi-dimensional array with recipes
// every 3 indices within the subarray is a recipe --> leftRecipe = "Apple", "Banana", "Cream" -- rightRecipe = "Date", "Eldeberry", "Fig"
// the last index in each subarray tells you who won the competition
// some recipes may be using the same ingredients but in different order -- these are considered the same recipe, regardless of what order theyre in --> i.e. "Apple", "Banana", "Cream" is the same as "Banana", "Cream", "Apple"
// the last index in each subarray tells you who won so you can keep track
// return the top 3 winners in the list

const returnTopThree = (list) => {
  let map = {};
  let orderedWinners = [];
  for(let i = 0; i < list.length; i++){
    let current = list[i];
    let leftRecipe = current.slice(0, 3).sort().join("");
    let rightRecipe = current.slice(3, 6).sort().join("");
    let winner = current.slice(-1).join("");
    if(map[leftRecipe] === undefined){
      map[leftRecipe] = 0;
    }
    if(map[rightRecipe] === undefined){
      map[rightRecipe] = 0;
    }
    if(winner === "LeftWins"){
      map[leftRecipe]++;
    } else {
      map[rightRecipe]++;
    }  
  }
  for(let key in map){
    orderedWinners.push([key, map[key]]);
  }
  orderedWinners.sort((a, b) => {
    return b[1] - a[1];
  });
  let topWinners = orderedWinners.slice(0,3);
  return topWinners; 
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// Separating into different functions

const topThreeWinners = (arr) => {
  let map = {};
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let leftRecipe = current.slice(0,3).sort().join("");
    let rightRecipe = current.slice(3,6).sort().join("");
    let winner = current.slice(-1).join("");
    if(map[leftRecipe] === undefined){
      map[leftRecipe] = 0;
    }
    if(map[rightRecipe] === undefined){
      map[rightRecipe] = 0;
    }
    if(winner === 'LeftWins'){
      map[leftRecipe]++;
    } else {
      map[rightRecipe]++;
    }
  }
  let sorted = sortWinners(map);
  let topThreeMap = getWinners(sorted.slice(0,3));
  return topThreeMap;
}

const sortWinners = (obj) => {
  let result = [];
  for(let key in obj){
    result.push([key, obj[key]]);
  }
  result.sort((a, b) => {
    return b[1] - a[1];
  });
  return result;
}

const getWinners = (arr) => {
  let map = {};
  for(let i = 0; i < arr.length; i++){
    let current = arr[i][0];
    let count = arr[i][1];
    if(map[current] === undefined){
      map[current] = count;
    }
  }
  return map;
}

console.log(topThreeWinners(arr));