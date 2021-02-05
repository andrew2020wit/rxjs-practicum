const { forkJoin, of } = require("rxjs");
const { delay } = require("rxjs/operators");

forkJoin(
  of(1, 2, 3).pipe(delay(500)),
  of(10, 20, 30).pipe(delay(100)),
  of(100, 200, 300)
).subscribe((vl) => console.log("forkJoin ", vl));
