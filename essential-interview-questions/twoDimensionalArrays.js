// Write a function to assign the corresponding numbers to a minesweeper game
console.log(mineSweeper([[0, 0], [0, 1]], 3, 4));

// 1st argument are the bomb locations -- assume no duplicates
// 2nd argument are the rows
// 3rd argument are the columns

// In the matrix below, the corresponding bomb locations are represented with a -1 value (bomb at 0,0 and 0,1)
// Every other 8 surrounding cells recieve a +1 value to let the player know there is at least 1 bomb near that cell
// Every positive value greater than 0 tells the player that there are that amount of bombs in the surrounding cells
// All the zeros let us know there are no bombs in the surrounding cells for that particular cell

// [0, 0, 0, 0] --> initialize 2d array with 0's first
// [0, 0, 0, 0]
// [0, 0, 0, 0]

// [[-1, -1, 1, 0],
//  [ 2,  2, 1, 0],
//  [ 0,  0, 0, 0]]

const mineSweeper = (bombs, rows, cols) => {
  const matrix = create2dArray(rows, cols);
  for(let bomb of bombs){
    let rowBomb = bomb[0];
    let colBomb = bomb[1];
    matrix[rowBomb][colBomb] = -1;
    for(let i = (rowBomb > 0 ? rowBomb - 1 : rowBomb); i <= (matrix[rowBomb + 1] ? rowBomb + 1 : rowBomb); i++){ // 0 to 1
      for(let j = (colBomb > 0 ? colBomb - 1 : colBomb); j <= (colBomb + 1 ? colBomb + 1 : colBomb); j++){ // 0 to 1
        if(matrix[i][j] !== -1 && matrix[i][j] !== undefined){
          matrix[i][j] += 1;
        }
      }
    }
  }
  return matrix;
};

const create2dArray = (rows, columns, defaultVal = 0) => {
  let result = new Array(rows);
  for(let i = 0; i < rows; i++){
    result[i] = new Array(columns).fill(defaultVal);
  }
  return result;
}

// using .map to fill 2d array
const mineSweeper = (bombs, rows, cols) => {
  const matrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
  for(let bomb of bombs){
    let rowBomb = bomb[0];
    let colBomb = bomb[1];
    matrix[rowBomb][colBomb] = -1;
    for(let i = (rowBomb > 0 ? rowBomb - 1 : rowBomb); i <= (matrix[rowBomb + 1] ? rowBomb + 1 : rowBomb); i++){
      for(let j = (colBomb > 0 ? colBomb - 1 : colBomb); j <= (colBomb + 1 ? colBomb + 1 : colBomb); j++){
        if(0 <= rowBomb && 0 <= colBomb && matrix[i][j] !== -1){
          if(matrix[i][j] !== undefined){
            matrix[i][j] += 1;
          }
        }
      }
    }
  }
  return matrix;
};

// with notes
const mineSweeper = (bombs, rows, cols) => {
  // create a 2d array with the given rows and columns all filled with 0's
  const matrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
  for(let bomb of bombs){ // bomb --> each bomb coordinate i.e. [0,3]
    let rowBomb = bomb[0]; // get the current row or X coordinate --> above coordinates, 0
    let colBomb = bomb[1]; // get the current column or Y coordinate --> above coordinates, 3
    matrix[rowBomb][colBomb] = -1; // make these coordinates in the matrix equal to -1 to represent a bomb
    // We want to check the current position of each rowBomb and colBomb -- if either are greater than 0, we can start from 1 position behind. Think about it this way, at [0, 0], you cant start a loop from -1 so you begin at the current index, 0.
    // Remember, we are trying to get the surrounding 8 cells around the current cell in order to add 1 to each of those surrounding cells. You cant add 1 to a cell that doesnt exist
    // You do the same thing to figure out when to stop the loop i.e. matrix[rowBomb + 1] --> check to see if another row exists. If not, stop at that current index
    for(let i = (rowBomb > 0 ? rowBomb - 1 : rowBomb); i <= (matrix[rowBomb + 1] ? rowBomb + 1 : rowBomb); i++){
      for(let j = (colBomb > 0 ? colBomb - 1 : colBomb); j <= (colBomb + 1 ? colBomb + 1 : colBomb); j++){
        // Were checking if the current cell is NOT another bomb AND if it is not undefined
        // We check if its not undefined to make sure it the cells dont fall out of range
        // i.e. bomb = [0, 3] --> in case of the column, 3 + 1 is truthy BUT there is no index at position 4 so we skip it        
        if(matrix[i][j] !== -1 && matrix[i][j] !== undefined){
          matrix[i][j] += 1; // Add 1 to the cell
        }
      }
    }
  }
  return matrix;
};








// Write a click function that expands the previous minesweeper function. Anytime the user click (were just creating the function to simulate a click action) on a cell that does not contain any bombs near that cell (our case, any 0 clicked), it should reveal that cell as well all of the other cells that do not have bombs near them that are connected to that original cell. Change the cells to -2 to represent all of the revealed cells

// Take the example below. 

// clickCell(matrix, 3, 5, 0, 1);

// It takes 5 arguments: the matrix, number of rows, number of columns, last two arguments are corrdinates of cell clicked to reveal the rest --> [0,1]
// Well pass in this matrix to test:

// [0, 0,  0, 0, 0]
// [0, 1,  1, 1, 0]
// [0, 1, -1, 1, 0]

// After the running the function, we should return this matrix:

// [-2, -2,  -2, -2, -2]
// [-2,  1,   1,  1, -2]
// [-2,  1,  -1,  1, -2]

let matrix = [ [ -1, 1, 0,  0 ],
               [  1, 1, 0,  0 ],
               [  0, 0, 1,  1 ],
               [  0, 0, 1, -1 ] ]

const clickCell = (matrix, rows, cols, xCoord, yCoord) => {
  let queueToCheck = [];
  if(matrix[xCoord][yCoord] === 0){
    matrix[xCoord][yCoord] = -2;
    queueToCheck.push([xCoord, yCoord]);
  } else {
    return matrix;
  }
  while(queueToCheck.length > 0){
    let currentCell = queueToCheck.shift();
    let rowIdx = currentCell[0];
    let colIdx = currentCell[1];
    for(let i = (rowIdx > 0 ? rowIdx - 1 : rowIdx); i <= (matrix[rowIdx + 1] ? rowIdx + 1 : rowIdx); i++){
      for(let j = (colIdx > 0 ? colIdx - 1 : colIdx); j <= (colIdx + 1 ? colIdx + 1 : colIdx); j++){
        if(matrix[i][j] === 0 && matrix[i][j] !== undefined){
          matrix[i][j] = -2;
          queueToCheck.push([i, j]);
        }
      }
    }    
  }
  return matrix;
}

console.log(clickCell(matrix, 4, 4, 1, 2));









// Write a function to rotate a 2d array 90 degrees. Take the below matrix for example for expected input and output
let matrix =   [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

// Should return:

// [[ 7, 4, 1 ],
//  [ 8, 5, 2 ],
//  [ 9, 6, 3 ]]

// Rotate 2d array by creating extra space via a result array to push new elements into
const rotate2dArray = (matrix) => {
  let result = [];
  for(let i = 0; i < matrix.length; i++){
    result[i] = [];
    for(let j = 0, position = matrix.length - 1; j < matrix.length; j++, position--){
      result[i][j] = matrix[position][i];
    }
  }
  return result;
}

// Only works if matrix is a perfect square
const rotateInPlace = (matrix) => {
  let length = matrix.length;
  for(let i = 0; i < length / 2; i++){
    for(let j = 0; j < Math.floor(length/2); j++){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[length-1-j][i];
        matrix[length-1-j][i] = matrix[length-1-i][length-1-j];
        matrix[length-1-i][length-1-j] = matrix[j][length-1-i];
        matrix[j][length-1-i] = temp;
    } 
  }
  return matrix;
}
