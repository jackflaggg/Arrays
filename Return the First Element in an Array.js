// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr) {
	let NumberArr = arr.filter(elem => typeof elem === 'number');
	
	return NumberArr ? NumberArr[0] : false;
}

console.log(getFirstValue([1, 2, 3]));