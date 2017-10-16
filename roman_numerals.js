function to_roman (num) {
  // your implementation code here

  var hasil = [];
  var roman1 = ["I", "V", "X"];
  var roman2 = ["X", "L", "C"];
  var roman3 = ["C", "D", "M"];
  if(num<10){
    if(num<=3){
      for(var i = 0; i<num; i++){
        hasil.push(roman1[0]);
      }
    }
    if(num==4){
      hasil.push(roman1[0]);
      hasil.push(roman1[1]);
    }
    if(num>4 && num<9){
      hasil.push(roman1[1]);
      for(var i = 5; i<num; i++){
        hasil.push(roman1[0]);
      }
    }
    if(num==9){
      hasil.push(roman1[0]);
      hasil.push(roman1[2]);
    }
    return hasil.join("")
  }

  //puluhan
  if(num>10 && num<100){
    //ambil angka
    var puluhan = Number(String(num)[0]);
    var satuan = Number(String(num)[1]);

    //convert puluhan
    if(puluhan<=3){
      for(var i = 0; i<puluhan; i++){
        hasil.push(roman2[0]);
      }
    }
    if(puluhan==4){
      hasil.push(roman2[0]);
      hasil.push(roman2[1]);
    }
    if(puluhan>4 && puluhan<9){
      hasil.push(roman2[1]);
      for(var i = 5; i<puluhan; i++){
        hasil.push(roman2[0]);
      }
    }
    if(puluhan==9){
      hasil.push(roman2[0]);
      hasil.push(roman2[2]);
    }

    //convert satuan
    if(satuan<=3){
      for(var i = 0; i<satuan; i++){
        hasil.push(roman1[0]);
      }
    }
    if(satuan==4){
      hasil.push(roman1[0]);
      hasil.push(roman1[1]);
    }
    if(satuan>4 && satuan<9){
      hasil.push(roman1[1]);
      for(var i = 5; i<satuan; i++){
        hasil.push(roman1[0]);
      }
    }
    if(satuan==9){
      hasil.push(roman1[0]);
      hasil.push(roman1[2]);
    }

    return hasil.join("")
  }

  //ratusan
  if(num>=100 && num<1000){
    //ambil angka
    var ratusan = Number(String(num)[0]);
    var puluhan = Number(String(num)[1]);
    var satuan = Number(String(num)[2]);

    //convert ratusan
    if(ratusan<=3){
      for(var i = 0; i<ratusan; i++){
        hasil.push(roman3[0]);
      }
    }
    if(ratusan==4){
      hasil.push(roman3[0]);
      hasil.push(roman3[1]);
    }
    if(ratusan>4 && ratusan<9){
      hasil.push(roman3[1]);
      for(var i = 5; i<ratusan; i++){
        hasil.push(roman3[0]);
      }
    }
    if(ratusan==9){
      hasil.push(roman3[0]);
      hasil.push(roman3[2]);
    }

    //convert puluhan
    if(puluhan<=3){
      for(var i = 0; i<puluhan; i++){
        hasil.push(roman2[0]);
      }
    }
    if(puluhan==4){
      hasil.push(roman2[0]);
      hasil.push(roman2[1]);
    }
    if(puluhan>4 && puluhan<9){
      hasil.push(roman2[1]);
      for(var i = 5; i<puluhan; i++){
        hasil.push(roman2[0]);
      }
    }
    if(puluhan==9){
      hasil.push(roman2[0]);
      hasil.push(roman2[2]);
    }

    //convert satuan
    if(satuan<=3){
      for(var i = 0; i<satuan; i++){
        hasil.push(roman1[0]);
      }
    }
    if(satuan==4){
      hasil.push(roman1[0]);
      hasil.push(roman1[1]);
    }
    if(satuan>4 && satuan<9){
      hasil.push(roman1[1]);
      for(var i = 5; i<satuan; i++){
        hasil.push(roman1[0]);
      }
    }
    if(satuan==9){
      hasil.push(roman1[0]);
      hasil.push(roman1[2]);
    }
    return hasil.join("")
  }

  //ratusan
  if(num>=1000 && num<=3000){
    //ambil angka
    var ribuan = Number(String(num)[0]);
    var ratusan = Number(String(num)[1]);
    var puluhan = Number(String(num)[2]);
    var satuan = Number(String(num)[3]);

    //convert ribuan
    if(ribuan<=3){
      for(var i = 0; i<ribuan; i++){
        hasil.push(roman3[2]);
      }
    }

    //convert ratusan
    if(ratusan<=3){
      for(var i = 0; i<ratusan; i++){
        hasil.push(roman3[0]);
      }
    }
    if(ratusan==4){
      hasil.push(roman3[0]);
      hasil.push(roman3[1]);
    }
    if(ratusan>4 && ratusan<9){
      hasil.push(roman3[1]);
      for(var i = 5; i<ratusan; i++){
        hasil.push(roman3[0]);
      }
    }
    if(ratusan==9){
      hasil.push(roman3[0]);
      hasil.push(roman3[2]);
    }

    //convert puluhan
    if(puluhan<=3){
      for(var i = 0; i<puluhan; i++){
        hasil.push(roman2[0]);
      }
    }
    if(puluhan==4){
      hasil.push(roman2[0]);
      hasil.push(roman2[1]);
    }
    if(puluhan>4 && puluhan<9){
      hasil.push(roman2[1]);
      for(var i = 5; i<puluhan; i++){
        hasil.push(roman2[0]);
      }
    }
    if(puluhan==9){
      hasil.push(roman2[0]);
      hasil.push(roman2[2]);
    }

    //convert satuan
    if(satuan<=3){
      for(var i = 0; i<satuan; i++){
        hasil.push(roman1[0]);
      }
    }
    if(satuan==4){
      hasil.push(roman1[0]);
      hasil.push(roman1[1]);
    }
    if(satuan>4 && satuan<9){
      hasil.push(roman1[1]);
      for(var i = 5; i<satuan; i++){
        hasil.push(roman1[0]);
      }
    }
    if(satuan==9){
      hasil.push(roman1[0]);
      hasil.push(roman1[2]);
    }

    return hasil.join("")

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
