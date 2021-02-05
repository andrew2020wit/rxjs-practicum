const { of, pipe } = require("rxjs");
const { filter, map } = require("rxjs/operators");

function discardOddDoubleEven() {
  return pipe(
    filter((v) => !(v % 2)),
    map((v) => v + v)
  );
}

of(1, 2, 3, 4, 5, 6, 7, 8, 9)
  .pipe(discardOddDoubleEven())
  .subscribe((x) => console.log(x));
