const { from, forkJoin, of, interval, throwError, merge } = require("rxjs");
const {
  delay,
  endWith,
  distinct,
  take,
  exhaust,
  exhaustMap,
  map,
  every,
  filter,
  finalize,
  find,
  tap,
  max,
  mergeAll,
} = require("rxjs/operators");

forkJoin(
  of(1, 2, 3).pipe(delay(500)),
  of(10, 20, 30).pipe(delay(100)),
  of(100, 200, 300)
).subscribe((vl) => console.log("forkJoin ", vl));

from([3, 17, 7, 87, 43, 2])
  .pipe(max())
  .subscribe((vl) => console.log("max() ", vl));

//Результат: 87

from([3, 17, 7, 87, 43, 2])
  .pipe(
    max((prev, curr) => {
      if (curr <= 50 && curr > prev) return -1;
      else return 1;
    })
  )
  .subscribe((vl) => console.log("max<50", vl));

//Результат: 43

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
