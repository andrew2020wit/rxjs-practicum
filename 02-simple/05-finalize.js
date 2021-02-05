const { of } = require("rxjs");
const { finalize } = require("rxjs/operators");

throwError("Fail")
  .pipe(finalize(() => console.log("finalize: Finalize call")))
  .subscribe(
    (vl) => console.log("finalize", vl),
    (err) => console.log("finalize: Err: ", err)
  );

of(1, 2, 3, 4, 5, 6)
  .pipe(finalize(() => console.log("finalize2: Finalize call")))
  .subscribe(() => {});

//Результат: 'Err: Fail', 'Finalize call'
