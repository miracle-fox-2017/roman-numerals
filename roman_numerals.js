function to_roman(num) {
	var angkaArab = [ 1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1 ]; 
	var roman = 	 ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	var result = '';

	for (var i = 0; i < angkaArab.length; i++) {
		// console.log(num+" >= "+angkaArab[i]);

		while (num >= angkaArab[i]) {
			result = result + roman[i];
			num = num - angkaArab[i];
		}
	}

	return result;
}	

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
