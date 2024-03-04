// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"

function evenOrOdd(arr) {
	let red = arr.reduce((acc, elem) => acc + elem, 0);
	return red % 2 !== 0 ? 'odd' : 'even'
}

console.log(evenOrOdd([0, 1, 5]))