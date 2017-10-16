function to_roman (num)
{
  let result = '';

  let ribuan = Math.floor(num / 1000);
  let ratusan = Math.floor((num / 100) % 10);
  let puluhan = Math.floor((num / 10) % 10)
  let satuan = num % 10;

  if (ribuan > 3)
  {
    return "out of range";
  }
  else
  {
    //cari ribuan
    for (let i = 0; i < ribuan; i++)
    {
      result += "M";
    }

    //cari ratusan
    for (let i = 0; i < ratusan; i++)
    {
      if (ratusan < 4)
      {
        result += "C";
      }
    }
    if (ratusan === 4)
    {
      result += "CD"
    }
    else if (ratusan === 5)
    {
      result += "D"
    }

    else if (ratusan < 9 && ratusan > 5)
    {
      result += "D"
      for (let i = 0; i < (ratusan - 5) ; i++)
      {
          result += "C";
      }
    }

    if (ratusan === 9)
    {
      result += "CM"
    }

    //cari puluhan
    for (let i = 0; i < puluhan; i++)
    {
      if (puluhan < 4)
      {
        result += "X";
      }
    }
    if (puluhan === 4)
    {
      result += "XL";
    }

    else if (puluhan === 5)
    {
      result += "L";
    }

    else if (puluhan < 9 && puluhan > 5)
    {
      result += "L"
      for (let i = 0; i < (puluhan - 5) ; i++)
      {
          result += "X";
      }
    }

    if (puluhan === 9)
    {
      result += "XC";
    }

    //cari satuan
    for (let i = 0; i < satuan; i++)
    {
      if (satuan < 4)
      {
        result += "I";
      }
    }
    if (satuan === 4)
    {
      result += "IV";
    }
    else if (satuan === 5)
    {
      result += "V";
    }
    else if (satuan < 9 && satuan > 5)
    {
      result += "V"
      for (let i = 0; i < (satuan - 5) ; i++)
      {
          result += "I";
      }
    }
    if (satuan === 9)
    {
      result += "IX";
    }

  return result;
  }
}


// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4));
console.log('9     | IX       | ', to_roman(9));
console.log('13    | XIII     | ', to_roman(13));
console.log('1453  | MCDLIII  | ', to_roman(1453));
console.log('1646  | MDCXLVI  | ', to_roman(1646));
