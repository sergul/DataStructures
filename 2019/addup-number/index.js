const getHighestFloor = (number) => {
	let numZeros = Math.ceil(Math.log(number + 1) / Math.LN10) - 1;
	let division = Math.pow(10, numZeros);
	while (number > 0) {
		const digit = Math.floor(number / division);
		number -= digit * division;
		division /= 10;
		console.log(digit);
	}
}

getHighestFloor(12345);
