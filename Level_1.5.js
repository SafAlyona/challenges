// 1.5.1 Find the sum of all integers from 1 to 100
function sumOfAllIntegers () {
	let result = 0
	for (let i = 1; i <= 100; i++){
		result += i
	}

	return result
}

// 1.5.2 Find the sum of all even integers in the range from 1 to 100
function sumOfAllEvenIntegers () {
	let result = 0
	for (let i = 1; i <= 100; i++){
		if (i % 2 === 0){
			result += i
		}
	}

	return result
}

// 1.5.3 Find the sum of all odd integers in the range from 1 to 100
function sumOfAllOddIntegers () {
	let result = 0
	for (let i = 1; i <= 100; i++){
		if (i % 2 === 1){
			result += i
		}
	}

	return result
}

// 1.5.4 Two integers are given. Find the remainder of the division of the first number by the second
const remainderOfDivision = (num1, num2) => num1 % num2

// 1.5.5 Some string is given. Iterate through and output to the console all the characters from the end of the line in turn
function outputsEachStringCharacter (str) {
	let res = []
	for (i = str.length - 1; i >= 0; i--) {
		res.push(str[i])
	}
	return res
}
