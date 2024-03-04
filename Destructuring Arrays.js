// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.

// Notes
// Check the Resources tab for more examples.

const arr = ["is", "nose", "lips", "ears", 2, true]
let [is, nose, lips, ears, , isTrue] = arr;

console.log(arr[4])
console.log(is)