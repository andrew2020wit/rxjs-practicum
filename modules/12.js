const { from, of, interval } = require("rxjs");
const {
  delay,
  endWith,
  distinct,
  take,
  exhaust,
  exhaustMap,
  map,
  every,
} = require("rxjs/operators");

from([1, 3, 3, 7, 2, 7])
  .pipe(distinct())
  .subscribe((vl) => console.log(vl));

//Результат: 1, 3, 7, 2

from([
  { title: "A", author: "Jack" },
  { title: "B", author: "John" },
  { title: "A", author: "John" },
])
  .pipe(distinct((book) => book.title))
  .subscribe((vl) => console.log(vl));

//Результат: {title: 'A', author: 'Jack'}, {title: 'B', author: 'John'}

of("hi", "how are you?", "sorry, I have to go now")
  .pipe(endWith("goodbye!"))
  .subscribe((word) => console.log("endWith: ", word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'

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

of(1, 2, 3, 4, 5, 6)
  .pipe(every((x) => x < 5))
  .subscribe((x) => console.log("every", x)); // -> false