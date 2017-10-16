function to_roman (num) {
  // your implementation code here
  let numArabic = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  let numRomawi = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  // while(num <= 0){
  var delta = num
  let romaw = ''
  var index = 0
  while(delta > 0){
    for(var i=0;i<numArabic.length; i++){
      if(numArabic[i+1] > delta){
        if(delta / numArabic[i] === 1){
          romaw += numRomawi[i]
          delta-=numArabic[i]
          return romaw
        }
      }
      if(i < numArabic.length-1){
        if(numArabic[i+1] > delta){
          if(delta%numArabic[i] === delta-numArabic[i]){
            romaw += numRomawi[i]
            delta-=numArabic[i]
          }
          if(delta > 1 && delta < 4){
            romaw += numRomawi[0]
            delta-=numArabic[0]
          }
        }
      }
      if(i === numArabic.length-1 && delta > numArabic[i]){
        romaw += numRomawi[i]
        delta-=numArabic[i]
      }
    }
  }
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
