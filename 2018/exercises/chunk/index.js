// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunks = [];
    let chunk = [];
    let startIndex = 0;
    const tail = array.length % size === 0 ? 0 : 1;
    const numChunks = parseInt(array.length / size) + tail;
    for (let i = 0; i < numChunks; ++i) {
        chunk = array.slice(startIndex, startIndex + size);
        chunks.push(chunk);
        startIndex+= size;
    }
    return chunks;
}

//chunk([1, 2, 4, 5, 6], 2);

module.exports = chunk;
