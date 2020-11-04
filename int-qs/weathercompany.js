// Ok this is the exercise

/* This block sets up Mocha test runner. Feel free to ignore. */
var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);

// If you want to output something to the right window...
console.log('example output');

/*
  Step 1 - Write a function that returns an array of field IDs sorted by a specified
  value. The method will take 2 arguments:

  * fieldData - An object expected to follow the format of "exampleApiResponse"
                shown below.
  * key - A string which specifies the field key on which to sort. It is
          expected to be one of the members found under the field element (see
          "exampleApiResponse").
*/

const exampleApiResponse = {
  "fields": [{
    "crop": "Soybeans",
    "fieldId": 133165,
    "plantingStartDate": 1398552337050,
    "harvestStartDate": 1413154386339,
    "season": "2016"
  }, {
    "crop": "Corn",
    "fieldId": 133128,
    "plantingStartDate": 1368495775000,
    "harvestStartDate": 1382900101449,
    "season": "2015"
  }, {
    "crop": "Corn",
    "fieldId": 133127,
    "plantingStartDate": 1398552337000,
    "harvestStartDate": 1413154386375,
    "season": "2014"
  }]
};

// Add your step 1 function here.
const returnFieldIDs = (obj, key) => {
  if(obj === null){
    return { error: "no field data found" };
  }
  return obj.fields.sort((a, b) => {
    return a[key] - b[key];
  }).map(current => {
    return current.fieldId;
  });
}

const returnFieldIDs = (obj, key) => {
  if(obj === null){
    return { error: "no field data found" };
  }  
  let objects = obj.fields;
  let sorted = objects.sort((a, b) => {
    return a[key] - b[key] || a[key].localeCompare(b[key]);
  });
  let result = sorted.map(current => {
    return current.fieldId;
  });
  return result;
}

console.log(returnFieldIDs(exampleApiResponse, 'season'));

/*
  Step 2 - Write tests that will demonstrate your function succeeds/fails as expected
  based on the following parameters passed to it:

    fieldData: null, key: “season”
    fieldData: {error: “no field data found”}, key: “season”
    fieldData: [above JSON response], key: null
    fieldData: [above JSON response], key: “foo”
    fieldData: [above JSON response], key: “season”
    fieldData: [above JSON response], key: “harvestStartDate”
*/

describe('Test suite', function() {
  // Add your step 2 tests below.
  it('example test', function() {
    assert(true);
  });
  
  it('throws error when null is passed in as object argument', function() {
    assert.deepEqual(returnFieldIDs(null, 'season'), { error: "no field data found" });
  });
});



mocha.run(); // Runs above tests.

/*
  Step 3 - Write another function that returns a string with HTML for rendering field
  IDs in an ordered list. It will take an array of field IDs as a param.
*/

// Add your step 3 function here.

const ids = returnFieldIDs(exampleApiResponse, 'season');
const createHTMLstrings = (list) => {
  const ol = document.createElement('ol');
  for(let i = 0; i < list.length; i++){
    let current = document.createElement('li');
    let text = document.createTextNode(list[i]);
    current.appendChild(text);
    ol.appendChild(current);
  }
  return ol;
}
console.log(createHTMLstrings(ids));

// <ol>
//   <li>fieldId</li>;

// </ol>