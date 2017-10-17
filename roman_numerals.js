function to_roman (num) {
  // your implementation code here
  /*
  1. Dekalrasikan angka dengan romawinya;
  2. Pisahkan angka kedalam golongan.
  2. Dan untuk yang pola romawinya sama bisa menggunakan perulangan
  */

  let hasil ='';

  while(num > 0) {

    if(num >= 1000){
      hasil += 'M';
      num -= 1000;
    }

    if(num >= 900){
      hasil += 'CM';
      num -= 900;
    }

    if(num >= 500){
      hasil += 'D';
      num -= 500;
    }

    if(num >= 400){
      hasil += 'CD';
      num -= 400;
    }

    if(num >= 100){
      hasil += 'C';
      num -= 100;
    }

    if(num >= 90){
      hasil += 'XC';
      num -= 90;
    }

    if(num >= 50){
      hasil += 'L';
      num -= 50;
    }

    if(num >= 40){
      hasil += 'XL';
      num -= 40;
    }

    if(num >= 10){
      hasil += 'X';
      num -= 10;
    }

    if(num === 9){
      hasil += 'IX';
      num -= 9
    }

    if(num >= 5){
      hasil += 'V';
      num -= 5;
    }

    if(num === 4){
      hasil += 'IV';
      num -= 4;
    }

    if(num >= 1){
      hasil += 'I';
      num -= 1;
    }
  }

    return hasil;
  }

  // Drive code
  console.log('My totally sweet testing script for new roman\n')
  console.log('input | expected | actual')
  console.log('——————|——————————|———————')
  console.log('1     | I        | ', to_roman(1))
  console.log('3     | III      | ', to_roman(3))
  console.log('4     | IV       | ', to_roman(4))
  console.log('5     | V        | ', to_roman(5))
  console.log('8     | VIII     | ', to_roman(8))
  console.log('9     | IX       | ', to_roman(9))
  console.log('13    | XIII     | ', to_roman(13))
  console.log('1453  | MCDLIII  | ', to_roman(1453))
  console.log('1646  | MDCXLVI  | ', to_roman(1646))
