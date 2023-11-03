// 1.3.1
function outputsThePenultimateCharacterOfTheString (str) {
	if (str.length > 1){
		return str[str.length - 2]
	}
}

// 1.3.2
const isdividedWithoutRemainder = (num1, num2) => num1 % num2 === 0