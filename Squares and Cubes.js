// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true
// Notes
// Remember to return either true or false.
// All arrays contain two positive numbers.
// If you're stuck, check the Resources for a hint.

function checkSquareAndCube(arr) {
	return Math.pow(arr[0], 1/2) === Math.pow(arr[1], 1/3);
}

console.log(checkSquareAndCube([9, 27]))