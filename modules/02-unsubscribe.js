const { interval } = require("rxjs");

//emit value in sequence every 1 second
const source = interval(100);
//output: 0,1,2,3,4,5....
const subscribe = source.subscribe((val) => console.log(val));

setTimeout(() => {
  subscribe.unsubscribe();
  console.log("unsubscribed");
}, 2000);
