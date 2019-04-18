const startBinarySearch = (numList, targetNumber) => {
  let min = 0;
  let max = numList.length - 1;
  let mid = Math.floor(max / 2);
  let found = numList[mid];
  while (found !== targetNumber) {
    console.log(`Step- ${mid}`);
    if (targetNumber > found) {
      mid = Math.floor((mid + max) / 2);
    } else if (targetNumber < found) {
      mid = Math.floor((min + mid) / 2);
    }
    found = numList[mid];
    if (mid === 0 && found !== targetNumber) {
      break;
    }
  }
  return numList[mid];
}

let foundNumber = startBinarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 4534543);
console.log(foundNumber);