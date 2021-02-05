const { of } = require("rxjs");
const { endWith } = require("rxjs/operators");

of("hi", "how are you?", "sorry, I have to go now")
  .pipe(endWith("goodbye!"))
  .subscribe((word) => console.log("endWith: ", word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
