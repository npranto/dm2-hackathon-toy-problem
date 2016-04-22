### splitAny

This hackathon's challenge is to write a function `splitAny` that can take in an array, string, number, object, or function and split it into an array based on the following structure:

```
splitAny( [ 10, { test: `test` }, () => `hello` ] ); // Returns the split value of each item in the array [ [ 1, 0 ], [ [ `test`, `test` ] ], [ `h`, `e`, `l`, `l`, `o` ] ];

splitAny( `Hello` ); // Returns [ `H`, `e`, `l`, `l`, `o` ];

splitAny( `Hello world` ); // Returns [ [ `H`, `e`, `l`, `l`, `o` ], [ `w`, `o`, `r`, `l`, `d` ] ];

splitAny( 204672 ); // Returns [ 2, 0, 4, 6, 7, 2 ];

splitAny({ test: 1, anotherThing: `hello` }); // returns [ [ `test`, 1 ], [ `anotherThing`, `hello` ] ];

splitAny( () => `MyString` ); // Returns the split value of the function's return value [ `M`, `y`, `S`, `t`, `r`, `i`, `n`, `g` ];

splitAny( false ); // Throws this TypeError specifying the type of the input and the input `Expected an array, string, object, number, or function, instead got boolean false`

splitAny( undefined ); // `Expected an array, string, object, number, or function, instead got undefined undefined`
```

The function should not modify the original argument in any way.

Grading based on:
* Completion
* Clever solutions
* ES6 usage

To participate fork this repo and clone your fork, commit and push once you have a solution  so we have a timestamp of when it was completed.

Unit tests have been provided, to run them:
* `npm install`
* `http-server/live-server/whatever-server`

Good luck!
