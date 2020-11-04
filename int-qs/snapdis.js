// http://caolan.github.io/async/docs.html#parallel
//
// parallel(tasks, callbackopt)
//
// Run the tasks collection of functions in parallel, without waiting until the previous function has completed.
// If any of the functions pass an error to its callback, the main callback is immediately called with the value of
// the error. Once the tasks have completed, the results are passed to the final callback as an array.
//
// Note: parallel is about kicking-off I/O tasks in parallel, not about parallel execution of code.
// If your tasks do not use any timers or perform any I/O, they will actually be executed in series.
// Any synchronous setup sections for each task will happen one after the other. JavaScript remains single-threaded.
// Parameters:
//   tasks    { Array | Iterable }  A collection containing functions to run.
//                                           Each function is passed a callback(err, result) which it must call on
//                                           completion with an error err (which can be null) and an optional result value.
//
//   callback { function <optional> }        An optional callback to run once all the functions have completed
//                                           successfully. This function gets a results array (or object) containing all
//                                           the result arguments passed to the task callbacks.
//                                           Invoked with (err, results).
//
// Returns: undefined
//
parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
],
// optional callback
function doneCallback(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
});

---------------------------------------------------------------------------------------------------------------

parallel([
    function task1(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
        // return 'one';
    },
    function task2(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
        // return 'two';
    }
],
// optional callback
function doneCallback(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results);
});

function parallel(arr, callback) {
    let results = [], err = null;
    let tasksCompleted = 0;
    let hasCalledCallback = false;
    const fn = (i, err, result) => {
        if (hasCalledCallback) {
            return;
        }
        if (err) {
            callback(err);
            hasCalledCallback = true;
        }
        if(result) {
            results[i] = result;
            tasksCompleted++;
        }
        if(tasksCompleted === arr.length){
            callback(err, results)
        }
    };
    for(let i = 0; i < arr.length; i++){
        arr[i](fn.bind(null, i));
    }
}
