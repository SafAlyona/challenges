// 1.1.1
function isNegative (num) {
	let result = 'negative number'
	if (num >= 0) {
		result = 'positive number'
	}

	return console.log(result)
}

// 1.1.2
function strLength (str) {
	return console.log(str.length)
}

// 1.1.3
function lastSymbol (str) {
	const lastSym = str[str.length - 1]

	return lastSym
}

// 1.1.4
function isEven (num) {
	if (num % 2 === 0){
		return 'even'
	} return 'odd'
}

// 1.1.5
function isFirstLettersMatch (word1, word2) {
	if (word1[0] === word2[0]){
		return 'Match!'
	} return 'Doesn`t match :('
}

// 1.1.6
function lastLetterExceptDs (word) {
	if (word[word.length - 1] != 'ь') {
		
	}
}
