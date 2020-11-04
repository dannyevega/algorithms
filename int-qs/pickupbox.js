var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

let arr = [];

const log_hit = () => {
  arr.push({
    timestamp: Date.now();
  });
}

log_hit();

const get_hits_5min = () => {
  let result = [];
  let now = Date.now();
  let last5 = new Date(now - (60000 * 5));
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    if(current.timestamp >= last5 && current.timestamp <= now){
      result.push(current);
    } else {
      arr.slice(current, 1);
    }
  }
  return result.length;
}

get_hits_5min();


/* 
[12:01, 12:02, 12:04]
get_hits_5min() at 12:04:30 -> 3
get_hits_5min() at 12:08:30 -> 1
get_hits_5min() at 12:10 -> 0

create a variable that holds the current time when you call 5min
create variable with difference for last 5 min
everything in between those two variables will be within last 5 min

Your previous Plain Text content is preserved below:

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you'd like to use for your interview,
simply choose it from the dropdown in the top bar.

You can also change the default language your pads are created with
in your account settings: https://coderpad.io/settings

Enjoy your interview!

 */