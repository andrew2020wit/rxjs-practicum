const { from } = require("rxjs");
const { distinct } = require("rxjs/operators");

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
