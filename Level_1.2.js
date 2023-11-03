// 1.2.1
function firstDigit (num) {
	if (num >= 0) {
		numStr = num.toString()
		return parseInt(numStr[0])
	} else {
		numStr = num.toString()
		return parseInt(numStr[1])
	}
 }

// 1.2.2
function lastDigit (num) {
	numStr = num.toString()
	return parseInt(numStr[numStr.length - 1])
}

// 1.2.3
function sumDigit (num) {
	let firstDig = firstDigit(num)
	let lastDig = lastDigit(num)
	return firstDig + lastDig
}

// 1.2.4
function howMuchDifits (num) {
	numStr = num.toString()
	result = 0
	num >= 0 ? result = numStr.length : result = numStr.length - 1
}

// 1.2.5
function FirstDigitsMatch (num1, num2){
	let numStr1 = Math.abs(num1).toString()
	let numStr2 = Math.abs(num2).toString()

	if (numStr1[0] === numStr2[0]){
		return 'the numbers match!'
	} return 'the numbers don`t match :('
}