const { of, interval, merge } = require("rxjs");
const { delay, take, map, mergeAll } = require("rxjs/operators");

merge(of(1).pipe(delay(500)), of(2), of(3).pipe(delay(250))).subscribe((vl) =>
  console.log("   merge ", vl)
);

of(1, 2)
  .pipe(
    map((vl) => interval(100 / vl).pipe(take(3))),
    mergeAll()
  )
  .subscribe((vl) => console.log("mergeAll ", vl));

//Результат: 0, 0, 1, 2, 1, 2
