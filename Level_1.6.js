// 1.6.1 An array with numbers is given. Find the sum of the squares of the elements of this array
function sumOfSquares (arr) {
	let sum = 0
	for (element of arr) {
		sum += element ** 2;
	}

	return sum
}

// 1.6.2 An array with numbers is given. Find the sum of the square roots of the elements of this array
function sumOfSquareRoots (arr) {
	let sum = 0
	for (element of arr) {
		sum += Math.sqrt(element);
	}

	return sum
}

// 1.6.3 An array with numbers is given. Find the sum of the positive elements of this array
function sumOfPositiveElements (arr) {
	let sum = 0
	for (element of arr) {
		if (element > 0){
			sum += element
		}
	}
	return sum
}

// 1.6.4 An array with numbers is given. Find the sum of those elements of this array that are greater than zero and less than ten
function sumElementsBetween (arr) {
	let sum = 0
	for (element of arr) {
		if (element < 10 && element > 0) {
			sum += element
		}
	}
	return sum
}
