// 1.4.1 Print all integers from 1 to 100
function allIntegers () {
	let result = []
	for (let i = 0; i < 100; i++) {
		result.push(i + 1)
	}

	return result
}

// 1.4.2 Print all integers from -100 to 0
function allNegativeIntegersReverse () {
	let result = []
	for (let i = -100; i <= 0; i++) {
		result.push(i)
	}

	return result
}

// 1.4.3 Print all integers from 100 to 1
function allIntegersReverse () {
	let result = []
	for (let i = 100; i > 0; i--) {
		result.push(i)
	}
	return result
}

// 1.4.4 Print all even numbers from the range from 1 to 100
function allEvenDigits () {
	let result = []
	for (let i = 1; i <= 100; i++) {
		if (i % 2 === 0) {
			result.push(i)
		}
	}
	return result
}

// 1.4.5 Print all the numbers that are multiples of three in the range from 1 to 100.
function allEvenDigits () {
	let result = []
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0) {
			result.push(i)
		}
	}
	return result
}