// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// Notes
// Check the Resources tab for examples.

const arr = [1, 2, 3, 4, 5, 6];

let [a, b, c] = arr;

console.log(a === arr[0]); // true
console.log(b === arr[1]); // true
console.log(c === arr[2])