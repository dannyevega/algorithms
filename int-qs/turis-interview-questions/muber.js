// Uber Final Technical
/*
Implement a Calculator
Input is a string
String can contain positive numbers or zero, + and * operator.
* Note: Multiplication is prioritized over addition
Output is sum of string

input example:
i = '2+10*3+6*10+1'
output = 93
*/
let input = '2+10*3+6*10+1'
// output = 93

const evaluateString = (input) => {
  let numStrings = input.split(/[^\w\s]/gi);
  let operands = input.match(/[*/+-]/g);
  let numbers = numStrings.map(num => {
    return parseInt(num);
  });
  let toRemove = [];
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    if(current === '*'){
      numbers[i] = (numbers[i] * numbers[i + 1]);
      toRemove.push(numbers[i + 1]);
    }
  }
  for(let i = 0; i < toRemove.length; i++){
    let current = toRemove[i];
    numbers.splice(numbers.indexOf(current), 1);
  }
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    if(current === '*'){
      operands.splice(operands.indexOf(current), 1);
    }
  }
  let total = numbers[0];
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    switch(current){
      case '+':
        total += numbers[i + 1];
        break;
      case '-':
        total -= numbers[i + 1];
        break;      
    }
  }
}