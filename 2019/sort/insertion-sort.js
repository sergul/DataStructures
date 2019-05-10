const sort = (list) => {
  for (let i = 1; i < list.length; ++i) {
    const insertionIndex = getInsertionIndex(list, i);
    if (insertionIndex != i) {
      const copy = list[i];
      for (let j = i; j > insertionIndex; --j) {
        list[j] = list[j - 1];
      }
      list[insertionIndex] = copy;
    }
  }
  return list;
}

const getInsertionIndex = (list, index) => {
  let i = index - 1;
  for (; i >= 0; --i) {
    if (list[index] > list[i]) {
      return i + 1;
    }
  }
  return i + 1;
}

const list = sort([2, 20, 1, 10, 4, 3, 5, 8, 7, 9, 6]);
console.log(list);