const sort = (list) => {
  for (let i = 0; i < list.length; ++i) {
    for (let j = 0; j < list.length - 1; ++j) {
      if (list[j] > list[j + 1]) {
        const copy = list[j];
        list[j] = list[j + 1];
        list[j + 1] = copy;
      }
    }
  }
  return list;
}

//console.log(sort([9, 5, 6, 2, 4, 8]));


const printDigits = (number) => {
  while (number > 0) {
    const digit = number % 10;
    number = (number - digit) / 10;
    console.log(digit);
  }
}

printDigits(456456);

