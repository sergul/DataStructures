const sort = (list) => {
  for (let i = 0; i < list.length; ++i) {
    let minIndex = getMinIndex(list, i, i + 1);
    if (i !== minIndex) {
      console.log(`step -  ${i + 1}`);
      const copy = list[i];
      list[i] = list[minIndex];
      list[minIndex] = copy;
    }
  }
  return list;
}

const getMinIndex = (list, startElementIndex, startCompareIndex) => {
  let minIndex = startElementIndex;
  for (let i = startCompareIndex; i < list.length; ++i) {
    if (list[minIndex] > list[i]) {
      minIndex = i;
    }
  }
  return minIndex;
}

const list = sort([2, 10, 4, 3, 5, 8, 7, 9]);
console.log(list);