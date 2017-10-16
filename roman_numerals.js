let angka_length = (num) => {
	if (num < 10){
		return 1;
	}
	return 1 + angka_length(Math.floor(num/10));
}
function to_roman (num) {
  // your implementation code here
  let numStr = num.toString();
	let romanCase = ["IV","IX","XL","XC","CD","CM"]
	let numCase = [4,9,40,90,400,900]
	let romanResult = "";
	let tempResult = "";
	while (numStr.length !== 0){
		num = Number(numStr);
		if (numStr[0] === "0"){
			numStr = numStr.slice(1);
		}
		if (numCase.indexOf(numStr[0]* Math.pow(10,angka_length(num)-1)) !== -1 ){
			romanResult = romanResult +romanCase[numCase.indexOf(numStr[0]* Math.pow(10,angka_length(num)-1))];
			numStr = numStr.slice(1);	
			
		}
		if (numCase.indexOf(numStr[0]* Math.pow(10,angka_length(num)-1)) === -1 ){
			num = numStr;
			switch (angka_length(num)){
				case 1:
				tempResult = "";
				if (num <4){
					for (let i = 0 ; i<num ; i++){
						romanResult = romanResult + "I";
					}
				}else if (num >= 6 && num < 9){
					for (let i = 0 ; i<(num-5) ; i++){
						tempResult = tempResult + "I";
					}
					romanResult = romanResult + "V" + tempResult;
				}else if(num !== 4 && num !==9){
					romanResult = romanResult + "V";
				}
				break;
				case 2:
				tempResult = "";
				if (num < 40){
					for (let i = 0 ; i<Math.floor(num/Math.pow(10,angka_length(num)-1)) ; i++){
						romanResult = romanResult + "X";
					}
				}else if (num > 60 && num<90){
					for (let i = 0 ; i<(Math.floor(num/Math.pow(10,angka_length(num)-1)))-5 ; i++){
						tempResult = tempResult + "X";
					}
					romanResult = romanResult + "L" + tempResult;
				}else {
					romanResult = romanResult + "L";
				}
				break;
				case 3:
				tempResult = "";
				if (num < 400){
					for (let i = 0 ; i<Math.floor(num/Math.pow(10,angka_length(num)-1)) ; i++){
						romanResult = romanResult + "C";
					}
				}else if (num > 600 && num <900 ){
					for (let i = 0 ; i<(Math.floor(num/Math.pow(10,angka_length(num)-1)))-5 ; i++){
						tempResult = "C";
					}
					romanResult = romanResult + "D" + tempResult;
				}else {
					romanResult = romanResult + "D";
				}
				break;
				case 4:
				tempResult = "";
				if (num < 4000){
					for (let i = 0 ; i<Math.floor(num/Math.pow(10,angka_length(num)-1)) ; i++){
						romanResult = romanResult + "M";
					}
				}else if (num > 6000 && num <9000){
					for (let i = 0 ; i<(Math.floor(num/Math.pow(10,angka_length(num)-1)))-5 ; i++){
						tempResult = "M";
					}
					romanResult = romanResult + "v" + tempResult;
				}else{
					romanResult = romanResult + "v";																																																																																					
				}
				break;
			}	
			numStr = numStr.slice(1);
		}
	}
	return romanResult;
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
