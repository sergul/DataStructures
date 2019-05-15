const startBinarySearch = (array, targetValue) => {
  var min = 0;
  var max = array.length - 1;
  var guess = 0;
  var found = 0;
  while (max >= min) {
    let guess = Math.floor((min + max) / 2);
    let found = array[guess];
    if (found === targetValue) {
      return guess;
    }
    if (targetValue > found) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}

let foundNumber = startBinarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 53);
console.log(foundNumber);
