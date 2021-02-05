const { of, interval } = require("rxjs");
const { delay, delayWhen, take } = require("rxjs/operators");

of(3, 6, 9)
  .pipe(delay(2000))
  .subscribe((vl) => console.log("delay(2000): ", vl));

of(3, 6, 9)
  .pipe(
    delayWhen((vl) => {
      console.log("delayWhen() call: ", new Date());
      return interval(1000).pipe(take(3));
    })
  )
  .subscribe((vl) => console.log("Result: ", new Date()));
