// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16

function length(s) {
	let count = 0;
	for (const iterator of s) {
		count++;
	}
	return count;
}

console.log(length("wash your hands!"))