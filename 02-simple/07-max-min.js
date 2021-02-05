const { from } = require("rxjs");
const { max } = require("rxjs/operators");

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
