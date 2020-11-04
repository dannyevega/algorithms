// eBay First Technical
// FIRST: What does this return?? Why?
function f() {
  console.log("foo");
  setTimeout(g, 0);
  console.log("baz");
  h();
}

function g() {
  console.log("bar");
}

function h() {
  console.log("blix");
}
f();


// SECOND: Create a button that is destroyed by clicking on it but two new buttons are created in it's place.
// https://codepen.io/dannyvega/pen/vaVWPd


// THIRD: Write an algorithm that will sort two arrays together/
var A = [1, 3, 5, 7, 7, 8, 8, 9, 9];
var B = [2, 4, 5, 6, 7, 8, 9];

const mergeTwoSortedArrays = (one, two) => {
  let left = 0, right = 0, result = [];
  while(left < one.length && right < two.length){
    if(one[left] < two[right]){
      result.push(one[left]);
      left++;
    } else {
      result.push(two[right]);
      right++;      
    }
  }
  return result.concat(one.slice(left).concat(two.slice(right)));
}
// console.log(mergeTwoSortedArrays(A, B));





// eBay Technical 2

/*
JS Concepts:
  - apply()
  - bind()
  - closure
  - what are self envoked function? pros/cons
  function anon(){
    convert(arr)
  }();
  - Ajax
    HTTP Get/Post
  - difference between class / id
  - what is the Event loop
  - how to access data attribute
    <div data-type='core'>
    </div>
  - what is the DOM ?
  - how to use querySelectorAll
  - what is arguments
  - what is function expression
  - what is declaration

  - ES6 syntax
    let / var
*/

// Write a function that will take this input array below, and and will output the result array

let input = [
    {
        itemId: 111111,
        title: 'Item-1',
        sellerName: 'seller-1',
        category: 'Electronics, Fitness'
    },
    {
        itemId: 222222,
        title: 'Item-2',
        sellerName: 'seller-2',
        category: 'Cars'
    },
    {
        itemId: 333333,
        title: 'Item-3',
        sellerName: 'seller-3',
        category: 'Electronics'
    },
    {
        itemId: 444444,
        title: 'Item-4',
        sellerName: 'seller-4',
        category: 'Cars , Bikes'
    }

]


// output - Group the items into Categories

/*
result = {
  Electronics: [
      {
          itemId: 111111,
          title: 'Item-1',
          sellerName: 'seller-1'
      },
      {
          itemId: 333333,
          title: 'Item-3',
          sellerName: 'seller-3'
      }
  ],
  Cars: [
      {
          itemId: 222222,
          title: 'Item-2',
          sellerName: 'seller-2'
      },
      {
          itemId: 444444,
          title: 'Item-4',
          sellerName: 'seller-4'
      }
  ],
  Bikes: [
      {
          itemId: 444444,
          title: 'Item-4',
          sellerName: 'seller-4'
      }
  ],

  Fitness: [
      {
          itemId: 111111,
          title: 'Item-1',
          sellerName: 'seller-1'
      }
  ]
}
*/

// Need to refactor
const groupByCategories = (input) => {
  let map = {};
  input.forEach(obj => {
    if(obj.category.indexOf(',') !== -1){
      obj.category = obj.category.split(', ');
      obj.category.forEach(category => {
        if(map[category] === undefined){
          map[category] = [];
        }
        map[category].push({
          'itemId': obj.itemId,
          'title': obj.title,
          'sellerName': obj.sellerName
        })
      });
    } else {
      if(map[obj.category] === undefined){
        map[obj.category] = [];
      }
      map[obj.category].push({
        'itemId': obj.itemId,
        'title': obj.title,
        'sellerName': obj.sellerName
      })
    } 
  });
}