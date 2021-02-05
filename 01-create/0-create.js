const { from, of, interval, throwError } = require("rxjs");

from([1, 3, 3, 7, 2, 7]).subscribe((vl) => console.log("from", vl));

of("hi", "how are you?", "sorry, I have to go now").subscribe((word) =>
  console.log("of: ", word)
);

throwError("someError").subscribe((vl) => console.log(" throwError  ", vl));

interval(300).subscribe((vl) => console.log(" interval(300)  ", vl));
