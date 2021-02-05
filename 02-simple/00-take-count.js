const { interval } = require("rxjs");
const { take, count } = require("rxjs/operators");

// take
console.log("== interval(100)");
interval(100)
  .pipe(take(10))
  .subscribe((x) => console.log("take(10):", x));

// count
interval(100)
  .pipe(take(10), count())
  .subscribe((x) => console.log("count(): ", x));

// count
interval(100)
  .pipe(
    take(10),
    count((x) => x % 2 === 0)
  )
  .subscribe((x) => console.log("count(): x % 2 === 0 ", x));
