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

from([3, 17, 7, 87, 43, 2, 95])
  .pipe(min())
  .subscribe((vl) => console.log(vl));

//Результат: 2

from([3, 17, 7, 87, 43, 2, 95])
  .pipe(
    min((prev, curr) => {
      if (curr >= 50 && curr <= 100) {
        if (prev >= 50 && prev <= 100) return curr > prev ? -1 : 1;
        else return 1;
      } else return -1;
    })
  )
  .subscribe((vl) => console.log(vl));

//Результат: 87
