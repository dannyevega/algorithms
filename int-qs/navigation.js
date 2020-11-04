const _ = require('underscore');

function test(message = 'Hello, World') {
  console.log(message);
}

const d = _.debounce(test, 500);

d();
d();
d();
d();
d('hi');

setTimeout(() => d('hello'), 1500);

const myDebounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn(...args);
    }, wait);
  }
}







// Rescheduled interview:
// http://jsfiddle.net/#&togetherjs=oaVfDnG4yi

// Uncomment either if needed
//var _ = require('underscore')
//var _ = require('lodash')


/*
 * Take an array of "pages" from a book and create an index for each word
 * ['It was a dark and stormy night', 'it was a dark time'] -> { 'dark': [1, 2], 'it': [1, 2], 'stormy': [1] }
 */

// Reverse a phrase: hello world --> dlrow olleh
const reverse = (word) => {
  word = word.split("");
  let last = word.length - 1;
  for(let i = 0; i < word.length / 2; i++){
    [word[i], word[last]] = [word[last], word[i]];
    last--;
  }
  return word.join("");
}

// Reverse a phrase in place: hello world --> olleh dlrow
const reverseInPlace = (phrase) => {
  phrase = phrase.split(" ");
  let result = [];
  for(let i = 0; i < phrase.length; i++){
    let current = reverse(phrase[i]);
    result.push(current);
  }
  return result.join(" ");
}

function indexBook(arr) {
  let map = {};
  arr.forEach((page, idx) => {
    page = page.split(" ");
    for(let i = 0; i < page.length; i++){
      let current = page[i].toLowerCase();
      if(map[current] === undefined){
        map[current] = [];
      }
      map[current].push(idx + 1);
    }
  });

  return JSON.stringify(map);
}

// console.log(indexBook(['It was a dark and stormy night', 'it was a dark time']));

/* Test Suite */

var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha({ui: 'bdd'});

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  // Add Tests Here!
  it("['It was a dark and stormy night', 'it was a dark time'] -> { 'dark': [1, 2], 'it': [1, 2], 'stormy': [1] }", function() {
    var testResult = indexBook(['It was a dark and stormy night', 'it was a dark time']),
        correctResult = JSON.stringify({ 'it': [1, 2], 'was': [1, 2], 'a': [1, 2], 'dark': [1, 2], 'and': [1], 'stormy': [1], 'night': [1], 'time': [2] });

    assert.equal(testResult, correctResult);
  });
});

mocha.run(function() {});



<div class='container'>
  <button>
  Add
  </button>
  <button class='remove'>
  Remove
  </button>
</div>        

.container {
  width: 200px;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.remove {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
}







const urls = [url0, url1, url2, url3];

urls.forEach((url) => {
  $http.get(url).then((data) => {
    
  });
});



function nextStep([data0, data1, data2, data3])