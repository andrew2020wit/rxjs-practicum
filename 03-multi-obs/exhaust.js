const { interval } = require("rxjs");
const { take, exhaust, exhaustMap, map } = require("rxjs/operators");

interval(300)
  .pipe(
    take(50),
    map((vl) =>
      interval(500).pipe(
        map((x) => "externalV: " + vl + " innerV: " + x),
        take(5)
      )
    ),
    exhaust()
  )
  .subscribe((vl) => console.log(" exhaust  ", vl));

interval(300)
  .pipe(
    take(50),
    exhaustMap((vl) =>
      interval(500).pipe(
        map((x) => "externalV: " + vl + " innerV: " + x),
        take(5)
      )
    )
  )
  .subscribe((vl) => console.log("exhaustMap", vl));
