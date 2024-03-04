// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// Notes
// Check the Resources tab for more examples.

let [read, ...head] = [1, 2, 3, 4]
console.log(read, head);