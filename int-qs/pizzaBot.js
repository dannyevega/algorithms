const pizzaBot = (input) => {
  let start = [0, 0], result = "";
  const coords = getCoordinates(input);
  let pizzaCoords = coords.slice(2, coords.length);
  for(let i = 0; i < pizzaCoords.length; i += 2){
    let xCoord = pizzaCoords[i], yCoord = pizzaCoords[i + 1];
    if (xCoord === start[0] && yCoord === start[1]){
      result += "D"
      continue;
    }
    if(xCoord !== start[0]){
      let xCount = xCoord - start[0];
      xCount > 0 ? result += repeatCharacter("E", xCount) : result += repeatCharacter("W", Math.abs(xCount));
    }
    if(yCoord !== start[1]){
      let yCount = yCoord - start[1];
      yCount > 0 ? result += repeatCharacter("N", yCount) : result += repeatCharacter("S", Math.abs(yCount));
    }
    result += "D";
    start = [xCoord, yCoord];
  }
  return result;
}

const repeatCharacter = (char, count) => {
  if(count === undefined){
    throw new Error("Enter count argument.");
  }
  if(count < 0){
    return;
  } 
  return count === 1 ? char : char += repeatCharacter(char, count - 1);
}

const getCoordinates = (stringInput) => {
  stringInput = stringInput.replace(/[^0-9\-]/g,'');
  let result = [], count = 0;
  while(count < stringInput.length){
    let current = parseInt(stringInput[count]);
    if(isNaN(current)){
      result.push(parseInt(0 - stringInput[count + 1]));
      count += 2;
      continue;
    }
    result.push(current);
    count++;
  }
  return result;
}
// pizzaBot("5x5 (-1, 3) (4, -4)"); WNNNDEEEEESSSSSSSD
// pizzaBot("5x5 (0, 0) (1, 2) (0, 0) (4, -2)"); DENNDWSSDEEEESSD
// pizzaBot("5x5 (1, 3) (4, 4)") ENNNDEEEND
// pizzaBot("5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"); DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD
// pizzaBot("5x5 (-1, 3) (2, 1) (0, 2)"); WNNNDEEESSDWWND











const pizzaBot = (input) => {
  // Start array to tell us where to start position of pizzaBot. Result string to hold pizzaBot's directions
  let start = [0, 0], result = "";

  // Get all coordinates from getCoordinates function
  const coords = getCoordinates(input);

  // Only holds the pizza coordinates not including 5x5, the size of the grid
  let pizzaCoords = coords.slice(2, coords.length);

  // Iterate through pizzaCoords to give directions to our pizzaBot
  for(let i = 0; i < pizzaCoords.length; i += 2){

    // Get positions of x and y coordinates
    let xCoord = pizzaCoords[i], yCoord = pizzaCoords[i + 1];

    // Drop a pizza if we have (0, 0) passed in as our first pizzaCoords
    if (xCoord === start[0] && yCoord === start[1]){
      result += "D"
      continue;
    }

    // Make sure xCoord is not on the same coordinate as the previous position in start array
    // For example: start = [4, 4], xCoord = 4, yCoord = 2; You don't need to go East or West, just North or South
    if(xCoord !== start[0]){
      let xCount = xCoord - start[0];

      // Depending if xCount is positive/negative, go East or West
      xCount > 0 ? result += repeatCharacter("E", xCount) : result += repeatCharacter("W", Math.abs(xCount));
    }    

    // Make sure yCoord is not on the same coordinate as the previous position in start array
    // For example: start = [4, 4], xCoord = 2, yCoord = 4; You don't need to go North or South, just East or West    
    if(yCoord !== start[1]){
      let yCount = yCoord - start[1];

      // Depending if yCount is positive/negative, go North or South
      yCount > 0 ? result += repeatCharacter("N", yCount) : result += repeatCharacter("S", Math.abs(yCount));
    }

    // Drop off a pizza whenever pizzaBot reaches its coordinates
    result += "D";

    // Reset start array to previous pizzaCoords
    start = [xCoord, yCoord];
  }

  // Return result 
  return result;
}
// pizzaBot("5x5 (1, 3) (4, 4)") will return ENNNDEEEND



// Recursive function to repeat character N times
const repeatCharacter = (char, count) => {
  if(count === undefined){
    throw new Error("Enter count argument.");
  }
  if(count < 0){
    return;
  } 
  return count === 1 ? char : char += repeatCharacter(char, count - 1);
}
// repeatCharacter("E", 3) will return "EEE"



const getCoordinates = (stringInput) => {
  // Removing all characters from string so it will only keep integers and dashes i.e. "55-134-4"
  stringInput = stringInput.replace(/[^0-9\-]/g,'');

  // Initialize result array to hold all values. Count variable to keep track of index.
  let result = [], count = 0;

  // Checking for negatives numbers here. If we encounter a dash, make the next element negative and push into result. Otherwise, push in the current element.
  while(count < stringInput.length){
    let current = parseInt(stringInput[count]);
    if(isNaN(current)){
      result.push(parseInt(0 - stringInput[count + 1]));
      count += 2;
      continue;
    }
    result.push(current);
    count++;
  }

  return result;
}
// getCoordinates("5x5 (-1, 3) (4, -4)") will return [5, 5, -1, 3, 4, -4]
