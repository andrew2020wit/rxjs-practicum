const { interval } = require("rxjs");
const { take, count, debounce, debounceTime } = require("rxjs/operators");

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

// debounce
interval(100)
  .pipe(
    take(10),
    debounce(() => interval(90))
  )
  .subscribe((x) => console.log("debounce 90 ", x));

// debounce

interval(100)
  .pipe(
    take(10),
    debounce(() => interval(110))
  )
  .subscribe((x) => console.log("debounce 110 ", x));

interval(100)
  .pipe(take(10), debounceTime(110))
  .subscribe((x) => console.log("debounceTime 110 ", x));

interval(100)
  .pipe(take(10), debounceTime(90))
  .subscribe((x) => console.log("debounceTime 90 ", x));
