const { from, of, interval } = require("rxjs");
const { every, filter, find } = require("rxjs/operators");

of(1, 2, 3, 4, 5, 6)
  .pipe(every((x) => x < 5))
  .subscribe((x) => console.log("every", x)); // -> false

from([17, 20, 3, 50, 4])
  .pipe(filter((vl) => vl % 10 === 0))
  .subscribe((vl) => console.log("filter ", vl));

//Результат: 20, 50

interval(1)
  .pipe(find((vl) => vl > 0 && vl % 5 === 0))
  .subscribe((vl) => console.log("find: ", vl));

//Результат: 5
