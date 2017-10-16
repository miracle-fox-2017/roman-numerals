function to_roman (num) {
//  your implementation code here
//  1 2 3 4 5 6 7

let hasil = '';
// let strnum = num.toString();
let angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
let romawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

  for ( let i = 0; i < romawi.length; i++){

     while (num >= angka[i]){
       hasil += romawi[i];
       num -= angka[i]
     }
}




return hasil
}
//
// function to_roman1 (angka){
//   let result ='';
//
//   while(angka > 0){
//     if (angka === 1000){
//       result += 'M'
//       angka -= 1000
//     }
//     if (angka === 900){
//       result += 'CM'
//       angka -= 900
//     }
//     if (angka === 500){
//       result += 'D'
//       angka -= 500
//     }
//     if (angka === 400){
//       result += 'CD'
//       angka -= 400
//     }
//     if (angka === 100){
//       result += 'C'
//       angka -= 100
//     }
//     if (angka === 90){
//       result += 'XC'
//       angka -= 90
//     }
//     if (angka === 50){
//       result += 'L'
//       angka -= 50
//     }
//
//     if (angka === 40){
//       result += 'XL'
//       angka -= 40
//     }
//
//    if (angka >=10){
//       result += 'X';
//       angka -= 10;
//     }
//    if (angka === 9){
//       result += 'IX';
//       angka -= 9;
//     }
//     if (angka >= 5){
//       result += 'V';
//       angka -= 5;
//     }
//    if (angka === 4){
//       result += 'IV';
//       angka -= 4;
//     }
//
//       if (angka >= 1){
//         result += 'I';
//         angka -= 1;
//       }
//
//     }
// return result
// }
//
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|———————')
// console.log('4     | IV       | ', to_roman1(36))
// console.log('9     | IX       | ', to_roman1(9))


// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
