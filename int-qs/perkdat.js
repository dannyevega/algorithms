// Given functions getA(), getB(), getC():
// Do not modify function getA, getB, or getC

function getA() {
  return 'A'
}

function getB(callback) {
  setTimeout(() => {
      callback('B')
  }, 10)
}

function getC() {
  return Promise.resolve()
      .then(() => 'C')
}

function getABC() {
  // should call getA, getB, and getC
  // and return a promise aggregating each function's result
  // like ['A', 'B', 'C']
  const bPromise = new Promise((resolve, reject) => {
    getB(resolve);
  });

  // Write your implementation here:
  return Promise.all([getA(), bPromise, getC()]).then(function(values) {
    return values;
  });
    
}

getABC().then(function (result) {
  console.log(result)
})
