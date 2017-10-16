function to_roman (num) {
  // menerima angka 1 - 3000, dan me return string angka romawi
  var hasil = '';
  var arabic = [1000, 900, 500, 400, 100,90, 50, 40, 10, 9, 5, 4, 1]
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL' ,'X', 'IX', 'V', 'IV', 'I']
  // EX 13 >>> 10 + 1 + 1 + 1

  for (var i = 0; i < arabic.length; i++){
    // ketika num nya 3, romawinya ditambah 'I' +'I' +'I'
    while (num >= arabic[i]){
      hasil = hasil + romawi[i] // ini misalkan 4, '' + romawi[i], maka saat masuk ke bawah dia sudah selesai (4-4 = 0)  0 tdk masuk ke kondisi while
      num = num - arabic[i] // Ex angkanya 3 => 3 -1 jadilah 'I', 2 - 1 jadilah 'I', 1 = i > '1'
    }
  }
  return hasil
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
