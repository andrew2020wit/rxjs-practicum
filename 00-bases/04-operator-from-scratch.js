const { of, interval, Observable } = require("rxjs");
const {} = require("rxjs/operators");

function customDelay(delayInMillis) {
  return (inputObservable) =>
    new Observable((subscriber) => {
      // this function will called each time this
      // Observable is subscribed to.
      const allTimerIDs = new Set();
      let count = 0;

      const inputSubscription = inputObservable.subscribe({
        next(value) {
          console.log("inner log:", value);
          count++;
          if (count > 10) {
            subscriber.complete();
          }
          const timerID = setTimeout(() => {
            let value2 = 0;
            if (typeof value === "number") {
              value2 = 100 * value;
            } else {
              value2 = value;
            }
            subscriber.next(value2);
            allTimerIDs.delete(timerID);
          }, delayInMillis);
          allTimerIDs.add(timerID);
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.complete();
        },
      });
      // the return value is the teardown function,
      // which will be invoked when the new
      // Observable is unsubscribed from.
      return () => {
        inputSubscription.unsubscribe();
        allTimerIDs.forEach((timerID) => {
          clearTimeout(timerID);
        });
      };
    });
}

interval(300)
  .pipe(customDelay(100))
  .subscribe((x) => console.log(x));

setTimeout(() => {
  interval(100)
    .pipe(customDelay(50))
    .subscribe((x) => console.log("2:", x));
}, 50);
