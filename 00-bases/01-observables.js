const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

const observer = {
  next(x) {
    console.log("observer: got value " + x);
  },
  error(err) {
    console.error("observer: something wrong occurred: " + err);
  },
  complete() {
    console.log("observer: done");
  },
};

const observer2 = {
  next: (x) => {
    console.log("observer2: got value " + x);
  },
  error: (err) => {
    console.error("observer2: something wrong occurred: " + err);
  },
  complete: () => {
    console.log("observer2: done");
  },
};

console.log("just before subscribe");
observable.subscribe(observer);
console.log("just after subscribe");

console.log("just before subscribe2");
observable.subscribe(observer2);
console.log("just after subscribe2");
