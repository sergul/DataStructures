const merge = (list, startPos, midPos, endPos) => {
    //[7, 3, 2, 8]
    let i, j, k; 
    let n1 = midPos - startPos + 1;
    let n2 = endPos - midPos;
  
    /* create temp arrays */
    let startList = [], endList = [];
  
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) {
        startList[i] = list[startPos + i];
    }
    for (j = 0; j < n2; j++) {
        endList[j] = list[midPos + 1+ j];
    }
  
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = startPos; // Initial index of merged subarray 
    while (i < n1 && j < n2) {
        if (startList[i] <= endList[j])
        { 
            list[k] = startList[i];
            i++; 
        } 
        else
        { 
            list[k] = endList[j];
            j++; 
        } 
        k++; 
    } 
  
    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) {
        list[k] = startList[i];
        i++;
        k++;
    } 
  
    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) {
        list[k] = endList[j];
        j++;
        k++;
    } 
}

const mergeSort = (list, startPos, endPos, adressee) => {
    if (endPos > startPos) {
        console.log(`in merge sort - ${adressee}`);
        const midPos = Math.floor((startPos + endPos) / 2);
        mergeSort(list, startPos, midPos, 'left side merge');
        mergeSort(list, midPos + 1, endPos, 'right side merge');
        merge(list, startPos, midPos, endPos);
    }
}

let list = [7, 3, 2, 8];
mergeSort(list, 0, list.length - 1);
console.log(list);