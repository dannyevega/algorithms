// First Technical

/*
Imagine you're at a restaurant and you have an exact amount of money and ONLY want to spend that exact amount.
Nothing more, Nothing less. ONLY that EXACT amount.

Write a function that will return all the combinations of items that you can get with that exact amount.

You're given a number as a total variable and have access to the menu with the names and prices

You can arrange the given information in any data structure you'd like to access it

Return all the total possible combinations in an array

items:  Fruit   Fries   Salad   Wings   Stick   Plate
prices:  2.15   2.75    3.35    3.55    4.20    5.80

example:
input: total = 4.30
output: ["Fruit, Fruit"]
*/

const menu = {
  '2.15': 'Fruit',
  '2.75': 'Fries',
  '3.35': 'Salad',
  '3.55': 'Wings',
  '4.20': 'Sticks',
  '5.80': 'Plate'
}

const buyFood = (menu, cash) => {
  let result = [], uniq = {};
  for(let item in menu){    
    let difference = Number(cash - item).toFixed(2);
    if(menu[difference] !== undefined){
      if(uniq[difference] === undefined){
        if(item === difference){
          result.push(menu[difference], menu[difference]);
        } else {
          result.push(menu[item], menu[difference]);
        }        
      }
      uniq[item] = true;
      uniq[difference] = true;
    }
  }
  return result.length > 0 ? result : null;
}
// console.log(buyFood(menu, 5.50));