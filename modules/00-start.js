const { of } = require("rxjs");
const { map } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((x) => console.log(x));
