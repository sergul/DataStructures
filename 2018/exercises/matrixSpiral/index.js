// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function generateInput(n) {
    let matrix = [];
    let value = 0;
    for (let row = 0; row < n; ++row) {
        matrix.push([]);
        for (let column = 0; column < n; ++column) {
            matrix[row][column] = ++value;
        }
    }
    return matrix;
}

function matrix(size) {
    let matrix = generateInput(size);
    let spiral = [];
    let n = matrix.length;
    let startIndex = 0;
    let offset = n;
    for (let row = 0; row < n + 1; ++row) {
        for (let column = row; column < n - (row + 1); ++column) {
            spiral[startIndex] = matrix[row][column];
            spiral[startIndex + offset - 1] = matrix[column][n - (row + 1)];
            spiral[startIndex + 2 * offset - 2] = matrix[n - (row + 1)][(n - (column + 1))];
            spiral[startIndex + 3 * offset - 3] = matrix[(n - (column + 1))][row];
            ++startIndex;
        }
        offset-=2;
        startIndex = spiral.length;
    }
    if (n % 2 === 1) {
        const center = parseInt(n/2);
        spiral.push(matrix[center][center]);
    }
    return spiral;
}
let size = 3;

matrix(size);

function print(arr) {
    for (let row of arr) {
        console.log(row.join(' '));
    }
    console.log('---------------');
}

function twoDimensional(arr, size) {
    var res = []; 
    for(var i=0;i < arr.length;i = i+size)
    res.push(arr.slice(i,i+size));
    return res;
}

module.exports = matrix;