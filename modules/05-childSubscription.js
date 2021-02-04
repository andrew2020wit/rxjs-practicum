const { interval } = require("rxjs");
const {} = require("rxjs/operators");

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe((x) => console.log("first: " + x));
const subscription2 = observable2.subscribe((x) => console.log("second: " + x));
const subscription3 = observable2.subscribe((x) => console.log("3: " + x));

subscription.add(subscription2);
subscription.add(subscription3);
subscription.remove(subscription3);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);

setTimeout(() => {
  subscription3.unsubscribe();
}, 3000);
