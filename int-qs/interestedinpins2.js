// Write a function that will parse through the string and return the evaluation of the expression
var expression = "6+9-12"; // 3
var expression2 = "6+12+7/5*3"; // 15

const evaluateExpression = (expression) => {
  let numStrings = expression.split(/[^\w\s]/gi);
  let operands = expression.match(/[*/+-]/g);
  let numbers = numStrings.map(num => {
    return parseInt(num);
  });
  let result = numbers[0];
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    switch(current){
      case '+':
        result += numbers[i + 1];
        break;
      case '-':
        result -= numbers[i + 1];
        break;
      case '*':
        result *= numbers[i + 1];
        break;
      case '/':
        result /= numbers[i + 1];
        break;
    }
  }
  return result;  
}